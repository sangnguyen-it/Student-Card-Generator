// Seoul National University Student Card Generator

// Seoul National University Information
const university = {
    name: "Seoul National University",
    koreanName: "서울대학교",
    shortName: "SNU",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Seoul_national_university_logotype.svg",
    address: "서울특별시 관악구 관악로 1, Seoul 08826, Republic of Korea",
    schoolCode: "SNU2024"
};

// Korean name syllables for random generation
const koreanNameSyllables = {
    family: ['김', '이', '박', '최', '정', '강', '조', '윤', '장', '임', '한', '오', '서', '신', '권', '황', '안', '송', '류', '전', '홍', '고', '문', '양', '손', '배', '조', '백', '허', '유', '남', '심', '노', '정', '하', '곽', '성', '차', '주', '우', '구', '신', '임', '나', '전', '민', '유', '진', '지', '엄', '채', '원', '천', '방', '공', '강', '현', '함', '변', '염', '양', '변', '여', '추', '노', '도', '소', '신', '석', '선', '설', '마', '길', '주', '연', '방', '위', '표', '명', '기', '반', '왕', '금', '옥', '육', '인', '맹', '제', '모', '장', '남', '탁', '국', '여', '진', '어', '은', '편', '구', '용'],
    given: ['민준', '서준', '도윤', '예준', '시우', '하준', '주원', '지호', '지후', '준서', '준우', '현우', '도현', '건우', '우진', '선우', '서진', '민재', '현준', '연우', '유준', '정우', '승우', '승현', '시윤', '준혁', '은우', '지환', '승민', '지우', '유찬', '윤우', '민성', '준영', '시후', '진우', '지훈', '민규', '윤호', '시현', '서현', '지민', '서윤', '서연', '지유', '채원', '하은', '유나', '수아', '은서', '예은', '다은', '소율', '지원', '윤서', '채은', '시은', '소은', '하린', '예린', '수빈', '지안', '소민', '예나', '수연', '하율', '아린', '다인', '가은', '나은', '윤아', '서아', '민서', '하늘', '가온', '나윤', '서우', '하음', '라온', '다온']
};

// Korean departments
const departments = [
    "컴퓨터공학부", "전기정보공학부", "기계공학부", "화학생물공학부", "건설환경공학부",
    "산업공학과", "재료공학부", "원자핵공학과", "조선해양공학과", "항공우주공학과",
    "의학과", "치의학과", "간호학과", "수의학과", "약학과",
    "경영학과", "경제학부", "정치외교학부", "사회학과", "심리학과",
    "국어국문학과", "영어영문학과", "불어불문학과", "독어독문학과", "중어중문학과",
    "일어일문학과", "언어학과", "국사학과", "동양사학과", "서양사학과",
    "철학과", "종교학과", "고고미술사학과", "미학과",
    "수학과", "물리천문학부", "화학부", "생명과학부", "지구환경과학부"
];

// Academic years
const academicYears = ["1학년", "2학년", "3학년", "4학년"];

// Lưu danh sách ảnh trả về từ API để chọn
let studentPhotoList = [];

// Hàm tạo tên Hàn Quốc ngẫu nhiên
function generateKoreanName() {
    const familyName = koreanNameSyllables.family[Math.floor(Math.random() * koreanNameSyllables.family.length)];
    const givenName = koreanNameSyllables.given[Math.floor(Math.random() * koreanNameSyllables.given.length)];
    return familyName + givenName;
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateRandomDate() {
    const today = new Date();
    const minAge = 18;
    const maxAge = 25;
    
    const randomAge = minAge + Math.floor(Math.random() * (maxAge - minAge + 1));
    const birthYear = today.getFullYear() - randomAge;
    const birthMonth = Math.floor(Math.random() * 12) + 1;
    const birthDay = Math.floor(Math.random() * 28) + 1;
    
    return `${birthYear}-${birthMonth.toString().padStart(2, '0')}-${birthDay.toString().padStart(2, '0')}`;
}

function generateStudentID() {
    const year = new Date().getFullYear();
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    return `${year}${randomNumber}`;
}

function generateCourse() {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear;
    const endYear = startYear + 4;
    return `${startYear} - ${endYear}`;
}

function generateClass() {
    const department = getRandomElement(departments);
    const year = getRandomElement(academicYears);
    return `${department} ${year}`;
}

function generateValidUntil() {
    // Random ngày hợp lệ trong khoảng từ 01/07/2028 đến 31/07/2029
    const startYear = 2028;
    const endYear = 2029;
    const month = 6; // Tháng 7 (0-based)
    const year = Math.random() < 0.5 ? startYear : endYear;
    let day;
    if (year === startYear) {
        day = Math.floor(Math.random() * 31) + 1;
    } else {
        day = Math.floor(Math.random() * 31) + 1;
    }
    const validDate = new Date(year, month, day);
    const dd = validDate.getDate().toString().padStart(2, '0');
    const mm = (validDate.getMonth() + 1).toString().padStart(2, '0');
    const yyyy = validDate.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
}

function generateKoreanPhoneNumber() {
    const prefixes = ['010', '011', '016', '017', '018', '019'];
    const prefix = getRandomElement(prefixes);
    const middle = Math.floor(Math.random() * 9000) + 1000;
    const last = Math.floor(Math.random() * 9000) + 1000;
    return `${prefix}-${middle}-${last}`;
}

// Hàm lấy ảnh từ thispersonnotexist.org qua proxy server
async function getStudentPhotoList() {
    try {
        const response = await fetch('/api/load-faces', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "type": "R",
                "age": "18-25",
                "race": "asian",
                "emotion": "none"
            })
        });
        if (response.ok) {
            const data = await response.json();
            if (data.fc && data.fc.length > 0) {
                return data.fc.map(base64Image => `/api/image/${base64Image}`);
            } else {
                throw new Error('Không có ảnh trong response');
            }
        } else {
            const errorData = await response.json();
            throw new Error(`HTTP ${response.status}: ${errorData.error || response.statusText}`);
        }
    } catch (error) {
        throw error;
    }
}

// Hiển thị danh sách thumbnail ảnh cho người dùng chọn
function showPhotoSelection(photoList, selectedIndex = 0) {
    let container = document.getElementById('photo-selection');
    if (!container) {
        container = document.createElement('div');
        container.id = 'photo-selection';
        container.style.cssText = `
            position: fixed;
            top: 120px;
            left: 20px;
            background: rgba(255,255,255,0.95);
            padding: 15px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.2);
            backdrop-filter: blur(10px);
            z-index: 1000;
            max-width: 320px;
        `;
        
        // Thêm title và close button
        const header = document.createElement('div');
        header.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        `;
        
        const title = document.createElement('h4');
        title.textContent = '📷 Chọn ảnh sinh viên';
        title.style.cssText = `
            margin: 0;
            color: #003366;
            font-size: 1rem;
        `;
        
        const closeBtn = document.createElement('button');
        closeBtn.textContent = '✕';
        closeBtn.style.cssText = `
            background: #ff4757;
            color: white;
            border: none;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            cursor: pointer;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        closeBtn.onclick = () => {
            container.style.display = 'none';
        };
        
        header.appendChild(title);
        header.appendChild(closeBtn);
        container.appendChild(header);
        
        // Thêm grid container cho ảnh
        const gridContainer = document.createElement('div');
        gridContainer.id = 'photo-grid';
        gridContainer.style.cssText = `
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
        `;
        container.appendChild(gridContainer);
        
        document.body.appendChild(container);
    } else {
        container.style.display = 'block';
    }
    
    const gridContainer = document.getElementById('photo-grid');
    gridContainer.innerHTML = '';
    
    photoList.forEach((url, idx) => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = `Photo ${idx+1}`;
        img.style.cssText = `
            width: 65px;
            height: 80px;
            object-fit: cover;
            border-radius: 8px;
            border: ${idx === selectedIndex ? '3px solid #003366' : '2px solid #ccc'};
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        img.title = 'Chọn ảnh này';
        img.onmouseover = () => {
            if (idx !== selectedIndex) {
                img.style.border = '2px solid #0066cc';
                img.style.transform = 'scale(1.05)';
            }
        };
        img.onmouseout = () => {
            if (idx !== selectedIndex) {
                img.style.border = '2px solid #ccc';
                img.style.transform = 'scale(1)';
            }
        };
        img.onclick = () => {
            // Update student photo in card
            const studentPhotoImg = document.querySelector('#student-photo img');
            if (studentPhotoImg) {
                studentPhotoImg.src = url;
            }
            showPhotoSelection(photoList, idx);
        };
        gridContainer.appendChild(img);
    });
}

async function generateStudentCard() {
    const generateBtn = document.querySelector('.btn-generate');
    const btnText = generateBtn.querySelector('.btn-text') || generateBtn;
    const originalText = btnText.textContent;
    const card = document.querySelector('.card');
    
    btnText.innerHTML = '<span class="loading-spinner"></span>Generating...';
    generateBtn.disabled = true;
    generateBtn.style.pointerEvents = 'none';
    card.classList.add('generating');

    try {
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const studentName = generateKoreanName();
        const guardianName = generateKoreanName() + ' (보호자)';
        const department = getRandomElement(departments);
        const year = getRandomElement(academicYears);
        const dob = generateRandomDate();
        const course = generateCourse();
        const studentClass = `${department} ${year}`;
        const studentID = generateStudentID();
        const validUntil = generateValidUntil();
        const emergencyCall = generateKoreanPhoneNumber();

        btnText.innerHTML = '<span class="loading-spinner"></span>Loading Photos...';

        // Lấy danh sách ảnh và lưu lại
        studentPhotoList = await getStudentPhotoList();
        if (!studentPhotoList || studentPhotoList.length === 0) throw new Error('Không có ảnh trả về');
        
        const randomIndex = Math.floor(Math.random() * studentPhotoList.length);
        const studentPhoto = studentPhotoList[randomIndex];

        card.style.opacity = '0.7';
        await new Promise(resolve => setTimeout(resolve, 300));

        document.getElementById('university-name').textContent = university.name;
        document.getElementById('student-name').textContent = studentName;
        document.getElementById('student-dob').textContent = dob;
        document.getElementById('student-course').textContent = course;
        document.getElementById('student-class').textContent = studentClass;
        document.getElementById('student-department').textContent = department;
        document.getElementById('student-id').innerHTML = `Student ID: ${studentID}`;
        document.getElementById('valid-until').textContent = validUntil;

        btnText.innerHTML = '<span class="loading-spinner"></span>Loading Images...';

        // Update university logo
        const universityLogoImg = document.querySelector('#university-logo img');
        if (universityLogoImg) {
            universityLogoImg.src = university.logo;
        }
        
        // Update student photo
        const studentPhotoImg = document.querySelector('#student-photo img');
        if (studentPhotoImg) {
            studentPhotoImg.src = studentPhoto;
        }

        showPhotoSelection(studentPhotoList, randomIndex);

        // Update barcode
        const barcodeUrl = `/api/barcode?data=${encodeURIComponent(university.name)}&university=snu&code=Code128`;
        document.getElementById('barcode').src = barcodeUrl;

        card.style.opacity = '1';
        card.style.transform = 'scale(0.95)';
        await new Promise(resolve => setTimeout(resolve, 100));
        card.style.transform = 'scale(1)';

        await new Promise(resolve => setTimeout(resolve, 1000));

        btnText.innerHTML = '✅ Tạo thành công!';
        showNotification('🎉 Thẻ sinh viên Seoul National University đã được tạo thành công!', 'success', 2000);
        await new Promise(resolve => setTimeout(resolve, 1000));

    } catch (error) {
        console.error('Generation error:', error);
        btnText.innerHTML = '❌ Tạo thất bại';
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const errorMessage = error.message.includes('fetch') 
            ? 'Lỗi mạng: Vui lòng kiểm tra kết nối internet và thử lại.' 
            : `Lỗi: ${error.message}`;
        
        showNotification(`❌ Không thể tạo thẻ sinh viên.<br><small>${errorMessage}</small>`, 'error', 5000);
    } finally {
        setTimeout(() => {
            btnText.textContent = originalText;
            generateBtn.disabled = false;
            generateBtn.style.pointerEvents = 'auto';
            card.classList.remove('generating');
            
            const downloadBtn = document.querySelector('.btn-download');
            downloadBtn.disabled = false;
            downloadBtn.style.opacity = '1';
            downloadBtn.style.transform = 'scale(1.05)';
            setTimeout(() => {
                downloadBtn.style.transform = 'scale(1)';
            }, 200);
        }, 500);
    }
}

async function downloadCard() {
    const downloadBtn = document.querySelector('.btn-download');
    const originalText = downloadBtn.textContent;
    
    try {
        downloadBtn.innerHTML = '<span class="loading-spinner"></span>Đang tạo ảnh...';
        downloadBtn.disabled = true;
        downloadBtn.style.pointerEvents = 'none';
        
        await new Promise(resolve => setTimeout(resolve, 300));
        
        downloadBtn.innerHTML = '<span class="loading-spinner"></span>Đang xử lý...';
        
        await drawCardManually();
        
        downloadBtn.innerHTML = '✅ Tải xuống hoàn tất!';
        showNotification('💾 Thẻ Seoul National University đã được tải xuống thành công!', 'success', 2000);
        await new Promise(resolve => setTimeout(resolve, 1500));
        
    } catch (error) {
        console.error('Download error:', error);
        downloadBtn.innerHTML = '❌ Tải xuống thất bại';
        await new Promise(resolve => setTimeout(resolve, 1500));
        showNotification(`❌ Không thể tải xuống thẻ.<br><small>Lỗi: ${error.message}</small>`, 'error', 4000);
    } finally {
        setTimeout(() => {
            downloadBtn.textContent = originalText;
            downloadBtn.disabled = false;
            downloadBtn.style.pointerEvents = 'auto';
        }, 500);
    }
}

async function drawCardManually() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Tăng kích thước canvas cho chất lượng cao hơn (tỉ lệ 16:10 như thẻ thật)
    canvas.width = 1600;
    canvas.height = 1000;

    const cardX = 0, cardY = 0;
    const cardWidth = 1600, cardHeight = 1000;

    // Card background với gradient nhẹ
    const gradient = ctx.createLinearGradient(0, 0, 0, cardHeight);
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(1, '#f8f9fa');
    ctx.fillStyle = gradient;
    ctx.fillRect(cardX, cardY, cardWidth, cardHeight);
    
    // Thêm watermark SNU emblem
    try {
        const watermarkImg = new Image();
        watermarkImg.crossOrigin = 'anonymous';
        await new Promise((resolve) => {
            watermarkImg.onload = resolve;
            watermarkImg.onerror = resolve;
            watermarkImg.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Seoul_national_university_emblem.svg/1200px-Seoul_national_university_emblem.svg.png';
            setTimeout(resolve, 4000);
        });
        
        if (watermarkImg.complete && watermarkImg.naturalWidth > 0) {
            // Vẽ watermark ở giữa thẻ với độ mờ
            ctx.save();
            ctx.globalAlpha = 0.08; // Độ mờ 8%
            
            const watermarkSize = Math.min(cardWidth, cardHeight) * 0.6; // 60% kích thước thẻ
            const watermarkX = cardX + (cardWidth - watermarkSize) / 2;
            const watermarkY = cardY + (cardHeight - watermarkSize) / 2;
            
            ctx.drawImage(watermarkImg, watermarkX, watermarkY, watermarkSize, watermarkSize);
            ctx.restore(); // Khôi phục globalAlpha
        }
    } catch (e) {
        console.warn('Watermark loading failed:', e);
    }
    
    // Card border với shadow effect
    ctx.shadowColor = 'rgba(0,0,0,0.1)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 3;
    ctx.strokeRect(cardX + 10, cardY + 10, cardWidth - 20, cardHeight - 20);
    ctx.shadowColor = 'transparent';

    // Header background - Seoul National University colors với gradient
    const headerHeight = 180;
    const headerGradient = ctx.createLinearGradient(0, 0, cardWidth, 0);
    headerGradient.addColorStop(0, '#003366');
    headerGradient.addColorStop(1, '#004080');
    ctx.fillStyle = headerGradient;
    ctx.fillRect(cardX + 10, cardY + 10, cardWidth - 20, headerHeight);
    
    // Load và vẽ logo university với chất lượng cao
    try {
        const logoImg = new Image();
        logoImg.crossOrigin = 'anonymous';
        await new Promise((resolve) => {
            logoImg.onload = resolve;
            logoImg.onerror = resolve;
            logoImg.src = university.logo;
            setTimeout(resolve, 3000);
        });
        if (logoImg.complete && logoImg.naturalWidth > 0) {
            const maxLogoWidth = 400; // Tăng từ 200 lên 400
            const maxLogoHeight = headerHeight - 20; // Tăng từ -30 lên -20 để logo có thể cao hơn
            let drawWidth = maxLogoWidth;
            let drawHeight = maxLogoWidth * (logoImg.naturalHeight / logoImg.naturalWidth);
            if (drawHeight > maxLogoHeight) {
                drawHeight = maxLogoHeight;
                drawWidth = maxLogoHeight * (logoImg.naturalWidth / logoImg.naturalHeight);
            }
            const logoX = cardX + 40;
            const logoY = cardY + 20 + (headerHeight - 40 - drawHeight) / 2; // Điều chỉnh vị trí
            
            // White background cho logo
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(logoX - 10, logoY - 10, drawWidth + 20, drawHeight + 20); // Tăng padding
            ctx.drawImage(logoImg, logoX, logoY, drawWidth, drawHeight);
        }
    } catch (e) {
        console.warn('Logo loading failed:', e);
    }
    
    // University name với typography đẹp hơn
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 52px "Segoe UI", Arial, sans-serif'; // Giảm từ 58px xuống 52px để cân đối với logo lớn
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    const textStartX = cardX + 480; // Dịch sang phải từ 280 lên 480 vì logo to hơn
    const maxTextWidth = 800; // Giảm từ 900 xuống 800 vì space ít hơn
    
    // English name
    const universityName = university.name;
    const koreanName = university.koreanName;
    
    ctx.fillText(universityName, textStartX, cardY + 30); // Điều chỉnh vị trí Y từ 25 lên 30
    
    // Korean name
    ctx.font = 'bold 46px "Segoe UI", Arial, sans-serif'; // Giảm từ 52px xuống 46px
    ctx.fillText(koreanName, textStartX, cardY + 90);
    
    // Student Card label với style đặc biệt
    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 34px "Segoe UI", Arial, sans-serif'; // Giảm từ 38px xuống 34px
    ctx.fillText('STUDENT CARD', textStartX, cardY + 145); // Điều chỉnh Y từ 150 xuống 145
    
    // Info section với layout cải thiện
    const infoY = cardY + headerHeight + 40;
    
    // Load và vẽ student photo với chất lượng cao
    let photoBottomY = infoY;
    try {
        const photoImg = new Image();
        photoImg.crossOrigin = 'anonymous';
        await new Promise((resolve) => {
            photoImg.onload = resolve;
            photoImg.onerror = resolve;
            const studentPhotoImg = document.querySelector('#student-photo img');
            photoImg.src = studentPhotoImg ? studentPhotoImg.src : 'logous.png';
            setTimeout(resolve, 3000);
        });

        const photoWidth = 280;  // Tăng từ 200 lên 280
        const photoHeight = 350; // Tăng từ 250 lên 350
        const photoX = cardX + 50;
        const photoY = infoY;
        photoBottomY = photoY + photoHeight;

        if (photoImg.complete && photoImg.naturalWidth > 0) {
            // Photo border với shadow
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(photoX - 8, photoY - 8, photoWidth + 16, photoHeight + 16);
            ctx.strokeStyle = '#003366';
            ctx.lineWidth = 4;
            ctx.strokeRect(photoX - 8, photoY - 8, photoWidth + 16, photoHeight + 16);

            ctx.save();
            ctx.beginPath();
            ctx.rect(photoX, photoY, photoWidth, photoHeight);
            ctx.clip();
            ctx.drawImage(photoImg, photoX, photoY, photoWidth, photoHeight);
            ctx.restore();
        } else {
            // Photo placeholder với style đẹp hơn
            ctx.fillStyle = '#f0f0f0';
            ctx.fillRect(photoX, photoY, photoWidth, photoHeight);
            ctx.strokeStyle = '#003366';
            ctx.lineWidth = 4;
            ctx.strokeRect(photoX, photoY, photoWidth, photoHeight);
            ctx.fillStyle = '#666666';
            ctx.font = 'bold 24px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('PHOTO', photoX + photoWidth/2, photoY + photoHeight/2);
        }
    } catch (e) {
        console.warn('Photo loading failed:', e);
    }
    
    // Student details với typography cải thiện
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    const detailsX = cardX + 380; // Dịch chuyển sang phải một chút vì avatar to hơn

    const details = [
        { label: 'Name:', value: document.getElementById('student-name').textContent, bold: true },
        { label: 'Date of Birth:', value: document.getElementById('student-dob').textContent },
        { label: 'Course:', value: document.getElementById('student-course').textContent },
        { label: 'Class:', value: document.getElementById('student-class').textContent },
        { label: 'Department:', value: document.getElementById('student-department').textContent }
    ];

    details.forEach((detail, index) => {
        const y = infoY + 30 + (index * 80); // Tăng spacing từ 60 lên 80

        // Label
        ctx.fillStyle = '#003366';
        ctx.font = 'bold 36px "Segoe UI", Arial, sans-serif'; // Tăng từ 28px lên 36px
        ctx.fillText(detail.label, detailsX, y);

        // Value với màu và font phù hợp
        ctx.fillStyle = detail.bold ? '#000000' : '#333333';
        ctx.font = detail.bold ? 'bold 42px "Segoe UI", Arial, sans-serif' : '38px "Segoe UI", Arial, sans-serif'; // Tăng từ 32px/28px lên 42px/38px
        
        const labelWidth = ctx.measureText(detail.label).width;
        ctx.fillText(detail.value, detailsX + labelWidth + 25, y); // Tăng spacing từ 20 lên 25
    });
    
    // Valid until với style nhẹ nhàng - đưa xuống dưới hơn
    ctx.fillStyle = '#666666';
    ctx.font = '24px "Segoe UI", Arial, sans-serif'; // Tăng font size
    const validText = `Valid until: ${document.getElementById('valid-until').textContent}`;
    const validY = photoBottomY + 50; // Tăng khoảng cách từ 30 lên 50
    ctx.fillText(validText, cardX + 50, validY);
    
    // Barcode với quality cao hơn - đưa xuống dưới nhiều hơn
    try {
        const barcodeImg = new Image();
        barcodeImg.crossOrigin = 'anonymous';
        await new Promise((resolve) => {
            barcodeImg.onload = resolve;
            barcodeImg.onerror = resolve;
            barcodeImg.src = document.getElementById('barcode').src;
            setTimeout(resolve, 3000);
        });

        const barcodeY = validY + 60; // Tăng khoảng cách từ 40 lên 60
        const barcodeStartX = cardX + 50;
        const barcodeWidth = cardWidth - 100;
        const barcodeHeight = 80;

        if (barcodeImg.complete && barcodeImg.naturalWidth > 0) {
            ctx.drawImage(barcodeImg, barcodeStartX, barcodeY, barcodeWidth, barcodeHeight);
        } else {
            // Generate fake barcode với pattern đẹp hơn
            ctx.fillStyle = '#000000';
            const universityNameForBarcode = university.name;
            for (let i = 0; i < barcodeWidth; i += 3) {
                const charIndex = Math.floor(i / 20) % universityNameForBarcode.length;
                const charCode = universityNameForBarcode.charCodeAt(charIndex);
                const shouldDraw = (charCode + i) % 5 !== 0;
                if (shouldDraw) {
                    const lineWidth = ((charCode + i) % 3) + 1;
                    const lineHeight = barcodeHeight * (0.7 + ((charCode + i) % 4) * 0.075);
                    ctx.fillRect(barcodeStartX + i, barcodeY + (barcodeHeight - lineHeight) / 2, lineWidth, lineHeight);
                }
            }
        }
    } catch (e) {
        console.warn('Barcode loading failed:', e);
    }
    
    // Footer elements với typography đẹp - tăng font size
    const footerY = cardY + cardHeight - 40; // Điều chỉnh từ -50 lên -40

    // Student ID (bottom left)
    ctx.fillStyle = '#333333';
    ctx.font = 'bold 28px "Segoe UI", Arial, sans-serif'; // Tăng từ 24px lên 28px
    ctx.textAlign = 'left';
    const studentId = document.getElementById('student-id').textContent;
    ctx.fillText(studentId, cardX + 50, footerY);

    // South Korea (bottom right)
    ctx.textAlign = 'right';
    ctx.fillText('South Korea', cardX + cardWidth - 50, footerY);
    
    // Download với chất lượng cao nhất
    canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        link.download = `seoul-national-university-card-${timestamp}.png`;
        link.href = url;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        URL.revokeObjectURL(url);
        console.log('Download completed successfully!');
    }, 'image/png', 1.0); // Maximum quality
}

function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];
    
    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const width = ctx.measureText(currentLine + ' ' + word).width;
        if (width < maxWidth) {
            currentLine += ' ' + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines;
}

// Notification System
function showNotification(message, type = 'info', duration = 3000) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, duration);
}

// Generate initial card khi trang được load
window.onload = async function() {
    showNotification('🇰🇷 Chào mừng đến với máy tạo thẻ Seoul National University!<br><small>Đang tạo thẻ sinh viên Hàn Quốc đầu tiên...</small>', 'info', 3000);
    await generateStudentCard();
};

// Student Information Extract cho Seoul National University
function startStudentVerification() {
    const verifyBtn = document.querySelector('.btn-verify');
    const originalText = verifyBtn.textContent;
    
    try {
        if (typeof window.studentCardVerifier === 'undefined') {
            showNotification('❌ Chrome Extension chưa được cài đặt!<br><small>Vui lòng cài đặt "Student Card Auto Verifier" extension từ thư mục 1NutLamNenTatCa</small>', 'error', 6000);
            return;
        }
        
        const studentInfo = extractStudentInfo();
        console.log('🔍 DEBUG: Extracted Seoul National University student info:', studentInfo);
        
        if (!studentInfo.school || !studentInfo.firstName) {
            showNotification('⚠️ Không tìm thấy dữ liệu thẻ sinh viên!<br><small>Vui lòng tạo thẻ sinh viên trước</small>', 'error', 4000);
            verifyBtn.textContent = originalText;
            verifyBtn.disabled = false;
            verifyBtn.style.pointerEvents = 'auto';
            return;
        }
        
        verifyBtn.innerHTML = '<span class="loading-spinner"></span>Đang trích xuất thông tin sinh viên Hàn...';
        verifyBtn.disabled = true;
        verifyBtn.style.pointerEvents = 'none';
        
        window.postMessage({
            type: 'STUDENT_CARD_EXTRACT',
            studentInfo: studentInfo,
            autoVerify: false
        }, '*');
        
        const messageHandler = (event) => {
            if (event.data.type === 'INFO_EXTRACTED') {
                window.removeEventListener('message', messageHandler);
                
                if (event.data.success) {
                    verifyBtn.innerHTML = '✅ Thông tin Hàn Quốc đã trích xuất!';
                    showNotification('🇰🇷 Thông tin sinh viên Seoul National University đã được trích xuất thành công!<br><small>Dữ liệu đã lưu vào extension. Nhấp "Bắt đầu xác minh" trong popup extension để xác minh.</small>', 'success', 8000);
                    
                    setTimeout(() => {
                        showNotification('💡 Nhấp vào icon extension để mở popup và xác minh sinh viên Hàn Quốc!', 'info', 5000);
                    }, 3000);
                } else {
                    verifyBtn.innerHTML = '❌ Trích xuất thất bại';
                    showNotification('❌ Không thể trích xuất thông tin sinh viên Seoul National University<br><small>Vui lòng thử lại hoặc kiểm tra extension</small>', 'error', 4000);
                }
                
                setTimeout(() => {
                    verifyBtn.textContent = originalText;
                    verifyBtn.disabled = false;
                    verifyBtn.style.pointerEvents = 'auto';
                }, 3000);
            }
        };
        
        window.addEventListener('message', messageHandler);
        window.studentCardVerifier.startWithData(studentInfo);
        
        setTimeout(() => {
            window.removeEventListener('message', messageHandler);
            if (verifyBtn.disabled) {
                verifyBtn.textContent = originalText;
                verifyBtn.disabled = false;
                verifyBtn.style.pointerEvents = 'auto';
                showNotification('⏰ Verification timeout<br><small>Please try again</small>', 'error', 3000);
            }
        }, 10000);
        
    } catch (error) {
        console.error('Verification error:', error);
        verifyBtn.textContent = originalText;
        verifyBtn.disabled = false;
        verifyBtn.style.pointerEvents = 'auto';
        showNotification('❌ Error starting verification<br><small>Please check console for details</small>', 'error', 4000);
    }
}

// Hàm trích xuất thông tin từ Seoul National University student card
function extractStudentInfo() {
    try {
        const universityName = document.getElementById('university-name')?.textContent?.trim() || university.name;
        const studentName = document.getElementById('student-name')?.textContent?.trim() || '';
        const studentDob = document.getElementById('student-dob')?.textContent?.trim() || '';
        const studentDepartment = document.getElementById('student-department')?.textContent?.trim() || '';
        
        // Korean names don't split the same way as Western names
        // For Korean names, usually the first character is family name
        const firstName = studentName.slice(1) || studentName; // Given name (everything except first character)
        const lastName = studentName.slice(0, 1) || ''; // Family name (first character)
        
        const country = 'South Korea';
        
        // Email cho Seoul National University
        const emailPrefix = `${firstName.toLowerCase()}${lastName.toLowerCase()}`;
        const email = `${emailPrefix}@snu.ac.kr`;
        
        const studentInfo = {
            school: universityName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            dateOfBirth: studentDob,
            department: studentDepartment,
            country: country,
            extractedAt: new Date().toISOString(),
            source: window.location.pathname,
            university: 'Seoul National University',
            universityCode: university.shortName
        };
        
        console.log('Extracted Seoul National University student info:', studentInfo);
        return studentInfo;
        
    } catch (error) {
        console.error('Error extracting Seoul National University student info:', error);
        return {
            school: university.name,
            firstName: '',
            lastName: '',
            email: '',
            dateOfBirth: '',
            department: '',
            country: 'South Korea',
            university: 'Seoul National University'
        };
    }
}
