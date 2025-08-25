const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Root route redirect to main page
app.get('/', (req, res) => {
    res.redirect('/index.html');
});

// Route for MAHE university page (Indian)
app.get('/india', (req, res) => {
    res.redirect('/mahe-university.html');
});

app.get('/mahe', (req, res) => {
    res.redirect('/mahe-university.html');
});

// Route for US universities page
app.get('/us', (req, res) => {
    res.redirect('/us-university.html');
});

// Route for Seoul National University page (Korean)
app.get('/korea', (req, res) => {
    res.redirect('/seoul-university.html');
});

app.get('/seoul', (req, res) => {
    res.redirect('/seoul-university.html');
});

app.get('/snu', (req, res) => {
    res.redirect('/seoul-university.html');
});

// Proxy endpoint for thispersonnotexist.org with country-specific configurations
app.post('/api/load-faces', async (req, res) => {
    try {
        console.log('📡 Proxying request to thispersonnotexist.org...');
        console.log('Request body:', req.body);
        
        // Default configuration for different countries/universities
        let requestBody = req.body;
        
        // If no specific configuration, apply defaults based on source
        if (!requestBody.race) {
            const userAgent = req.get('User-Agent') || '';
            const referer = req.get('Referer') || '';
            
            if (referer.includes('seoul-university') || referer.includes('korea')) {
                requestBody = {
                    ...requestBody,
                    race: 'asian',
                    age: '18-25'
                };
                console.log('🇰🇷 Applying Korean/Asian configuration');
            } else if (referer.includes('us-university')) {
                requestBody = {
                    ...requestBody,
                    race: 'mixed',
                    age: '18-25'
                };
                console.log('🇺🇸 Applying US mixed race configuration');
            } else if (referer.includes('mahe-university')) {
                requestBody = {
                    ...requestBody,
                    race: 'asian',
                    age: '18-25'
                };
                console.log('🇮🇳 Applying Indian/Asian configuration');
            }
        }
        
        const response = await fetch('https://thispersonnotexist.org/load-faces', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Origin': 'https://thispersonnotexist.org',
                'Referer': 'https://thispersonnotexist.org/'
            },
            body: JSON.stringify(requestBody)
        });

        if (response.ok) {
            const data = await response.json();
            console.log('✅ Success! Got', data.fc?.length || 0, 'faces');
            console.log('📋 First face data sample:', data.fc?.[0]?.substring(0, 50) + '...');
            res.json(data);
        } else {
            console.error('❌ API Error:', response.status, response.statusText);
            res.status(response.status).json({ 
                error: `API returned ${response.status}: ${response.statusText}` 
            });
        }
    } catch (error) {
        console.error('❌ Proxy Error:', error);
        res.status(500).json({ 
            error: 'Proxy server error: ' + error.message 
        });
    }
});

// Proxy endpoint để serve ảnh từ thispersonnotexist.org (giải quyết CORS cho html2canvas)
app.get('/api/image/:base64path', async (req, res) => {
    try {
        const base64path = req.params.base64path;
        const imageUrl = `https://thispersonnotexist.org/downloadimage/${base64path}`;
        
        console.log('🖼️ Proxying image request:', imageUrl);
        
        const response = await fetch(imageUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Referer': 'https://thispersonnotexist.org/'
            }
        });

        if (response.ok) {
            // Set proper headers for image
            res.set({
                'Content-Type': response.headers.get('content-type') || 'image/jpeg',
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'public, max-age=3600'
            });
            
            // Pipe the image response
            response.body.pipe(res);
            console.log('✅ Image served successfully');
        } else {
            console.error('❌ Image fetch error:', response.status);
            res.status(response.status).send('Image not found');
        }
    } catch (error) {
        console.error('❌ Image proxy error:', error);
        res.status(500).send('Image proxy error: ' + error.message);
    }
});

// Proxy endpoint để serve barcode từ barcode.tec-it.com với thông tin tùy chỉnh theo trường
app.get('/api/barcode', async (req, res) => {
    try {
        let { data, code, university } = req.query;
        
        // Customize barcode data based on university
        if (university) {
            switch (university.toLowerCase()) {
                case 'snu':
                case 'seoul':
                    data = `SNU-${data}`;
                    break;
                case 'mahe':
                    data = `MAHE-${data}`;
                    break;
                case 'us':
                    data = `US-UNIV-${data}`;
                    break;
                case 'webbience':
                    data = `WEBBIENCE-${data}`;
                    break;
            }
        }
        
        const barcodeUrl = `https://barcode.tec-it.com/barcode.ashx?data=${encodeURIComponent(data)}&code=${code || 'Code128'}&translate-esc=false&dpi=200&imagetype=png`;
        
        console.log('📊 Proxying barcode request:', barcodeUrl);
        
        const response = await fetch(barcodeUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });

        if (response.ok) {
            // Set proper headers for image
            res.set({
                'Content-Type': response.headers.get('content-type') || 'image/png',
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'public, max-age=3600'
            });
            
            // Pipe the barcode response
            response.body.pipe(res);
            console.log('✅ Barcode served successfully');
        } else {
            console.error('❌ Barcode fetch error:', response.status);
            res.status(response.status).send('Barcode not found');
        }
    } catch (error) {
        console.error('❌ Barcode proxy error:', error);
        res.status(500).send('Barcode proxy error: ' + error.message);
    }
});

// API endpoint to get university information
app.get('/api/universities', (req, res) => {
    const universities = [
        {
            id: 'mahe',
            name: 'Manipal Academy of Higher Education',
            shortName: 'MAHE',
            country: 'India',
            flag: '🇮🇳',
            url: '/mahe-university.html',
            features: ['Indian Names', 'MAHE Branding', '16 Departments', 'AI Photos']
        },
        {
            id: 'us',
            name: 'US Universities',
            shortName: 'US',
            country: 'United States',
            flag: '🇺🇸',
            url: '/us-university.html',
            features: ['American Names', '15+ Universities', '15 Schools', 'AI Photos']
        },
        {
            id: 'snu',
            name: 'Seoul National University',
            shortName: 'SNU',
            country: 'South Korea',
            flag: '🇰🇷',
            url: '/seoul-university.html',
            features: ['Korean Names', 'SNU Branding', '35+ Departments', 'Asian AI Photos']
        },
        {
            id: 'webbience',
            name: 'Webbience National Public School',
            shortName: 'WEBBIENCE',
            country: 'Custom',
            flag: '🏫',
            url: '/webbience-school.html',
            features: ['Custom Input', 'Photo Upload', 'Manual Entry', 'PNG Download']
        }
    ];
    
    res.json(universities);
});

// API endpoint to get statistics
app.get('/api/stats', (req, res) => {
    const stats = {
        totalUniversities: 4,
        totalCountries: 3,
        totalNames: '100+',
        features: ['Global Coverage', 'Secure Generation', 'AI Photos', 'Multiple Formats']
    };
    
    res.json(stats);
});

app.listen(PORT, () => {
    console.log(`🚀 Proxy server running on http://localhost:${PORT}`);
    console.log(`📂 Serving files from: ${__dirname}`);
    console.log(`🌐 Available pages:`);
    console.log(`   📋 Main Menu: http://localhost:${PORT}/index.html`);
    console.log(`   🇮🇳 MAHE University: http://localhost:${PORT}/mahe-university.html`);
    console.log(`   🇺🇸 US Universities: http://localhost:${PORT}/us-university.html`);
    console.log(`   🇰🇷 Seoul National University: http://localhost:${PORT}/seoul-university.html`);
    console.log(`\n📍 Quick access routes:`);
    console.log(`   /india or /mahe → MAHE University`);
    console.log(`   /us → US Universities`);
    console.log(`   /korea, /seoul, or /snu → Seoul National University`);
});
