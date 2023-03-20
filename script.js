var ballX = 0;
		var ballY = 0;
		var ballSpeed = 10;
		var moveLeft = false;
		var moveUp = false;
		var moveRight = false;
		var moveDown = false;
		var boardWidth = 500;
		var boardHeight = 500;

		function handleKeyDown(event) {
			if (event.keyCode == 37) { // sol ok tuşu
				moveLeft = true;
			}
			if (event.keyCode == 38) { // yukarı ok tuşu
				moveUp = true;
			}
			if (event.keyCode == 39) { // sağ ok tuşu
				moveRight = true;
			}
			if (event.keyCode == 40) { // aşağı ok tuşu
				moveDown = true;
			}
		}

		function handleKeyUp(event) {
			if (event.keyCode == 37) { // sol ok tuşu
				moveLeft = false;
			}
			if (event.keyCode == 38) { // yukarı ok tuşu
				moveUp = false;
			}
			if (event.keyCode == 39) { // sağ ok tuşu
				moveRight = false;
			}
			if (event.keyCode == 40) { // aşağı ok tuşu
				moveDown = false;
			}
		}

		function moveBall() {
			// topun hareket etmesi için yeni pozisyonunu hesapla
			ballX += (moveRight ? ballSpeed : 0) - (moveLeft ? ballSpeed : 0);
			ballY += (moveDown ? ballSpeed : 0) - (moveUp ? ballSpeed : 0);

			// topun çerçeveye çarpmasını kontrol et
			if (ballX + 20 > boardWidth) {
				ballX = boardWidth - 20;
			}
			if (ballY + 20 > boardHeight) {
				ballY = boardHeight - 20;
			}
			if (ballX < 0) {
				ballX = 0;
			}
			if (ballY < 0) {
				ballY = 0;
			}

			// topun engelle çarpıp çarpmadığını kontrol et
			var ballElement = document.getElementById("ball");
			var obstacleElement = document.getElementById("obstacle");
			var ballRect = ballElement.getBoundingClientRect();
			var obstacleRect = obstacleElement.getBoundingClientRect();
			if (ballRect.right >= obstacleRect.left && 
		    ballRect.left <= obstacleRect.right && 
		    ballRect.bottom >= obstacleRect.top && 
		    ballRect.top <= obstacleRect.bottom) {
			clearInterval(gameLoopId);
			alert("Oyun bitti!");
		}

		// topun yeni pozisyonunu uygula
		ballElement.style.left = ballX + "px";
		ballElement.style.top = ballY + "px";
	}

	document.addEventListener("keydown", handleKeyDown);
	document.addEventListener("keyup", handleKeyUp);

	var gameLoopId = setInterval(moveBall, 50);