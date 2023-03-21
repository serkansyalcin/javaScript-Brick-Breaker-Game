# javaScript - Brick Breaker Game

## Bu oyun, platform üzerinde yukarı doğru hareket eden bir topu yönlendirirler. Amacı, platformu kullanarak tuğlaları kırmak ve oyun alanında mümkün olduğunca yüksek bir puan elde etmektir. Oyun bitince, clearInterval fonksiyonu çağrılarak top hareketi durdurulur.

## Bu kod, bir tuğla kırma oyununu oluşturmak için kullanılır. İlk olarak, canvas ve bağlantılı bileşenler belirlenir. Daha sonra top ve çubuk objeleri, tuğla objeleri, skor ve en yüksek skor tanımlanır. Top ve çubuk hareketleri, tuğla yok etme, çarpışma tespiti ve oyunu yeniden başlatma fonksiyonları da eklenir.

const canvas = document.getElementById("gameCanvas") ile canvas belirlenir ve ctx bağlantılı bileşenlerin çizim işlemlerini gerçekleştirir. Daha sonra canvas'in genişliği ve yüksekliği belirlenir.

let ball = {x: canvas.width/2, y: canvas.height/2, radius: 10, speed: 5, dx: 5, dy: -5}; ile top objesi belirlenir. X ve Y koordinatları, yarıçapı, hızı ve topun x ve y doğrultusundaki hız değişimi belirlenir.

let paddle = {x: canvas.width / 2 - 50, y: canvas.height - 20, width: 100, height: 10, speed: 10, dx: 0}; ile çubuk objesi belirlenir. X ve Y koordinatları, genişliği, yüksekliği ve hız değişimleri belirlenir.

let bricks = []; let brickRowCount = 5; let brickColumnCount = 8; ile tuğla objeleri tanımlanır. Satır ve sütun sayısı belirlenir.

function createBricks() fonksiyonu, bricks dizisindeki her bir tuğla objesi için, x ve y koordinatları ve durum (1: tuğla var, 0: tuğla yok) tanımlanarak tuğlalar oluşturulur.

function drawBricks() fonksiyonu, tuğlaların çizim işlemini yapar.

function collisionDetection() fonksiyonu, top ile tuğla arasında bir çarpışma olduğunda, topun yönü tersine döner, tuğlanın durumu "0" yapılır ve puan artırılır.

function drawBall() ve function drawPaddle() fonksiyonları, top ve çubuk çizim işlemlerini yapar.

function moveBall() fonksiyonu, topun hareketini sağlar. Eğer top kenarlara çarpar ise, topun yönü tersine döner. Eğer top çubuğa çarparsa yönü değişir, eğer alt kenara çarparsa oyun biter.

function movePaddle() fonksiyonu, klavyedeki yön tuşlarına göre çubuğun hareketini sağlar.

function drawScore() fonksiyonu, oyuncunun puanını ekranda gösterir.

function draw() fonksiyonu, oyunun animasyonunu ve çizim işlemlerini yapar.

![image](https://user-images.githubusercontent.com/26199757/226490351-579da275-86ac-4dd8-9919-b2a2ac2c842b.png)
