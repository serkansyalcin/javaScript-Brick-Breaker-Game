# javaScript Top Oyunu

## Bu oyun, bir kare oyun tahtası içinde hareket eden bir topu içerir. Oyun, topun tahtanın sağ alt köşesine ulaşmasıyla biter. Top hareketi, moveBall fonksiyonu aracılığıyla kontrol edilir ve topun pozisyonu, HTML içindeki #ball öğesinin top ve left özellikleriyle ayarlanır. Oyunun bitip bitmediği, topun tahtanın sağ alt köşesine ulaşıp ulaşmadığı kontrol edilerek belirlenir. Oyun bitince, clearInterval fonksiyonu çağrılarak top hareketi durdurulur.

## Top hareketi, keydown ve keyup olaylarını dinler ve moveBall() fonksiyonunu periyodik olarak çağırarak topu hareket ettirir. moveBall() fonksiyonu, moveLeft, moveUp, moveRight ve moveDown değişkenlerine göre topun pozisyonunu günceller ve HTML'deki ball div elementinin stil özelliklerini güncelleyerek topun tahtada hareket etmesini sağlar.
