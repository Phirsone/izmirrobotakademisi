const url = window.location.href;
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const menuBtn = document.querySelector(".menu-btn");
const course_tab_title = document.querySelector("title");
const course_title = document.getElementById("course-title");
const main_background = document.querySelector(".course-main");
const course_cont = document.getElementById("course-cont");
const course_paragraph = document.getElementById("course-par");
const list = document.getElementById("list");
menuBtn.addEventListener("click", function () {
  nav.classList.toggle("clicked");
});

if (url.charAt(url.length - 1) == "1") {
  okuloncesi();
}
if (url.charAt(url.length - 1) == "2") {
}
if (url.charAt(url.length - 1) == "3") {
  ortaokul();
}
if (url.charAt(url.length - 1) == "4") {
} else {
}

function okuloncesi() {
  /* Sekme Başlığı */
  course_tab_title.innerText += "Okul Öncesi";
  /* Başlık */
  course_title.innerText = "Okul Öncesi";
  /* Kurs ArkaPlan */
  main_background.classList.add("okuloncesi-back");
  /* Kurs Hakkında */
  course_cont.innerText =
    "Okul Öncesi Robotik Kodlama Eğitimi, problem çözme becerilerini ve yaratıcı düşünmeyi geliştirmek için tasarlanmış, küçük çocuklar için kodlama ile tanışmalarını sağlayacak ve bunu eğlenceli hale getirecek bir kurstur.";
  /* Paragraf */
  course_paragraph.innerHTML = `<p>
 Robotik Kodlama, çocukların okul öncesi dönemlerinde temel teknoloji ve
 mühendislik kavramlarıyla etkileşim kurmaları için eğlenceli ve
 işbirlikçi bir rol oynar. Bilgisayarsız kodlama eğitimleri herhangi bir
 cihaz kullanılmadan ve kod satırı yazmadan nasıl kod yazılacağını
 öğretir. Bu eğitim problem çözmeyi, eleştirel düşünmeyi ve mantıksal
 akıl yürütmeyi teşvik eden etkinlikler anlamına gelir. Birçok ebeveyn,
 küçük çocuklara kodlama öğretmenin çok karmaşık olabileceğini veya ekran
 başında geçirdikleri süre konusunda endişelenebileceğini düşünebilir.
 Ancak bu bilgisayarsız etkinliklerle çocuklar kodlama kavramını
 uygulamalı olarak kolayca öğrenebilir!
</p>
<p>
 Çocukların bilgisayarsız kodlamayı öğrenmelerini sağlamak için çok
 çeşitli ve yaratıcı eğitim içeriği oluşturduk. Uygulamalı kaynaklar,
 çocukların bilişsel becerilerini geliştirmeye ve onları teknoloji
 hakkında öğrenmeye dahil etmeye yardımcı olacaktır.
</p>`;
  /* Liste */
  list.innerHTML = ` <figcaption>PEKİ ÇOCUKLAR NE ÖĞRENECEK?</figcaption>
<ul>
 <li>
   👁 Bilgisayarsız Kodlama,çocukların ince motor becerileri ve el-göz
   koordinasyonu geliştirmelerine olanak tanırken aynı zamanda
   işbirliği ve ekip çalışmasına da olanak tanır.
 </li>
 <li>⭐️ Kodlamayı somut ve soyut hale getirir.</li>
 <li>🦾 Robotiğe daha kolay bir geçiş sağlar.</li>
 <li>🔢 Sayısal düşünme ve matematik becerilerini geliştirir.</li>
 <li>
   🤖 Elektriksiz robotik Eğitimi , çevremizdeki farklı robotların
   nasıl çalıştığını anlamaya yardımcı olur ve bazı programlama
   kavramları hakkında bilgi verir.
 </li>
 <li>
   🧠 Çocukları geleceğe hazırlar ve tüm bunlar için sadece meraklı ve
   yaratıcı bir zihin yeterli!
 </li>
</ul>`;
}
function ortaokul() {
  /* Sekme Başlığı */
  course_tab_title.innerText += "Ortaokul";
  /* Başlık */
  course_title.innerText = "Ortaokul";
  /* Kurs ArkaPlan */
  main_background.classList.add("ortaokul-back");
  /* Kurs Hakkında */
  course_cont.innerText =
    "Ortaokul robotik kodlama Eğitimi, öğrencilere temel Bilim, Teknoloji, Mühendislik ve Matematik (STEM) kavramlarını gerçek dünya problemlerine uyarlama konusunda etkili bir deneyim kazandırır.";
  /* Paragraf */
  course_paragraph.innerHTML = `<p>
  Ortaokul robotik kodlama eğitimi öğrencilere, bir problemi çözmek için adım adım strateji uygulamak konusunda çözüm odaklı düşünme, örüntü tanıma ve algoritma tasarımını öğretir. Öğrenciler, kendi robotlarını hareket ettirmek için, ses çıkartmak, ışık yakmak, sensörlerden alınan verilerle robotu kontrol etmek ve istedikleri tüm komutları gerçekleştirebilmeleri için robotu nasıl programlayacaklarını öğrenirler. Öğrenciler robotlar oluşturarak ve programlayarak yaratıcılıklarını nasıl geliştirebilceklerini ve belirli bir problem için mümkün olan en iyi çözümü oluşturmayı keşfediyorlar. İzmir Robot Akademisi’nin eğitim programları, ortaokul öğrencilerine bu gerçek dünyadaki sorunlara yenilikçi ve sistematik bir şekilde nasıl yaklaşacaklarını öğretir. 
</p>
<p>
Robotların her yerde hayatımıza entegre olacağını her zaman duyuyoruz; hastanelerde, fabrikalarda, bankalarda veya tarım endüstrisi vb yerlerde. Ama zaten onlarla çevrili değil miyiz? Çamaşır makinesini döndüren nedir? Buzdolabındaki ışığın yanmasını ve duvara dönük olduğunda robot süpürgenin yön değiştirmesini sağlayan nedir? Halihazırda sahip olduğumuz Robotların iç mantığını anlamak, yarının Robotlarını tasarlamamıza yardımcı olacaktır. 

</p>
<p>
Teknolojinin gelişmesi, eğitim yazılımlarına verilen önemin artması, blok tabanlı programlar ve robotik kitler ile birlikte artık küçük yaştaki öğrencilerin teknoloji ve mühendislik uygulamaları ile tanışması kodlama eğitimi ile sağlanmaktadır. Özellikle STEM'e erken yaşta ilgi duymak, öğrencimiz için daha sonraki yaşamında hızlı kariyer ilerlemesine yol açar.
</p>
`;
  /* Liste */
  list.innerHTML = ` <figcaption>PEKİ ÇOCUKLAR NE ÖĞRENECEK? :</figcaption>
<ul>
 <li>
   👁 Bilgisayarsız Kodlama,çocukların ince motor becerileri ve el-göz
   koordinasyonu geliştirmelerine olanak tanırken aynı zamanda
   işbirliği ve ekip çalışmasına da olanak tanır.
 </li>
 <li>⭐️ Probleme göre çözüm algoritması kurma becerisi.</li>
 <li>🦾 Hayal edebilecekleri her şeyi üretme becerisi.</li>
 <li>🔢 Algoritma kurma ve kurulan algoritmayı kodlama .</li>
 <li>
   🤖 Sistemli ve yaratıcı düşünebilme becerisi.
 </li>
 <li>
   🧠 Kodlama eğitimi, bilişimsel düşünme becerisini geliştir.
 </li>
 <li>
    Tasarım odaklı düşünme ve yenilikçi olmayı sağlar.
 </li>
 <li>
     Problem için en kısa yoldan çözüme ulaşma.
 </li>
</ul>`;
}
