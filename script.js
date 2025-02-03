function openTab(evt, tabName) {
    const tabcontents = document.querySelectorAll('.tabcontent');
    const tablinks = document.querySelectorAll('.tablinks');

    // 모든 탭 내용 숨기기
    tabcontents.forEach(content => content.classList.remove('active'));

    // 모든 버튼 비활성화
    tablinks.forEach(link => link.classList.remove('active'));

    // 선택된 탭 내용 및 버튼 활성화
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
  }

  // 실시간 시간 업데이트
  function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
    document.getElementById('footer').textContent = `현재 시간: ${timeString}`;
  }
  
  setInterval(updateTime, 1000); // 매초 업데이트

  let clickCount = 0;
  const emojiDisplay = document.getElementById('emoji-display');
  const counterDisplay = document.getElementById('counter');
  
  const fireConfetti = () => {
    const defaults = { 
      origin: { y: 0.7 }, 
      zIndex: 10000 
    };
  
    confetti({ ...defaults, particleCount: 50, spread: 26, startVelocity: 55 });
    confetti({ ...defaults, particleCount: 30, spread: 60, decay: 0.91, scalar: 0.8 });
    confetti({ ...defaults, particleCount: 70, spread: 100, scalar: 0.8 });
    confetti({ ...defaults, particleCount: 20, spread: 120, startVelocity: 25, shapes: ['star'] });
    confetti({ 
      ...defaults, 
      particleCount: 30, 
      spread: 100, 
      startVelocity: 45, 
      colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'] 
    });
  };
  
  emojiDisplay.addEventListener('click', (e) => {
    clickCount++;
    counterDisplay.textContent = `클릭 횟수: ${clickCount}`;
    const emojiList = ['😊', '😄', '😁','😍', '😆', '😎', '🥳', '😜', '🤪', '🎉'];
  
    const emojiIndex = Math.floor((clickCount) / 10) % emojiList.length;
    emojiDisplay.textContent = emojiList[emojiIndex];
  
    // 클릭 애니메이션 추가
    emojiDisplay.style.animation = 'click-animation 0.3s';
  
    if ((clickCount % 10) === 0) {
      fireConfetti();
      emojiDisplay.style.animation = 'spin 0.5s'; // 스핀과 클릭 애니메이션 동시 적용
    }

      // 100번째 클릭 체크 및 텍스트 변경
      if (clickCount === 100) {
        document.querySelector('.emoji-container h3').textContent = '100번이나 클릭하시다니 대단해요!';
    }

      // 1000번째 클릭 체크 및 텍스트 변경
      if (clickCount === 1000) {
        document.querySelector('.emoji-container h3').textContent = '그만 누르세요 ㅠㅠㅠㅠ';
    }

    // 애니메이션 종료 후 스타일 초기화
    setTimeout(() => {
      emojiDisplay.style.animation = '';
    }, 300);

  });
  
  // 마우스 오버 효과를 위한 이벤트 리스너 추가
  emojiDisplay.addEventListener('mouseover', () => {
    emojiDisplay.style.transform = 'scale(1.1)';
  });
  
  emojiDisplay.addEventListener('mouseout', () => {
    emojiDisplay.style.transform = 'scale(1)';
  });
  