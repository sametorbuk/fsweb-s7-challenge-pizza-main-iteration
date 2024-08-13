
### Pizza Sipariş Formu - Tasarımdan Koda II

Bu proje, Workintech Full Stack Web Geliştirme eğitimindeki S8 sunuma hazırlık olarak, ReactJS becerilerinizi geliştirmeniz için tasarlanmıştır. Bu projede, React kullanarak verilen tasarımı aynen uygulamanız beklenmektedir. Figma tasarım dosyasını referans alarak, sayfanızın görsel yapısını oluşturun.

**Amaç:**

- Verilen Figma tasarımına birebir uyan, mobil uyumlu dinamik bir ReactJS uygulaması oluşturmak.
- Bileşen mantığını ve CSS classlarını kullanarak ve sayfayı şekillendirmek.
- En basit seviyede React kullanarak temel sayfa ve bileşen ağacını kurgulamak.

## Önemli Notlar

- Bu projede ReactJS kullanacaksınız. Sayfalar arası navigasyon dışında projede işlev olmayacak, sadece statik veri aktarımı için, bileşen mimarisini kurmanızı bekliyoruz. (`useState`)
- Görevleri yetiştirmek için, MUTLAKA tasarımların listelendiği sırayla ilerle. Proje planından şaşma. Önceki task yetişmeden sonrakine geçerek sadece zamanını boşa harcamayı riske atarsın. 
- Metinler ve form alanı başlıklarını kendi istediğin gibi güncelleyebilirsin. Yine de kesinlikle **renkler ve yerleşimde** değişiklik istemiyoruz.
- Sonraki hafta sunumdan sonra dilersen sonrasında kendi portföyüne eklemeden önce için özelleştirebilirsin.
- Figma tasarımına sadık kalarak mobil ve masaüstü ekranlarda, düzgün dengeli bir görünüm sağlamayı hedefleyin.
- HTML yapınızın anlamsal (semantic) olmasına özen gösterin.
- CSS'te class isimlendirmesi ve kod düzenine dikkat edin.

**Gereksinimler:**

- Visual Studio Code
- Node.js ve npm (Node Package Manager) bilgisayarınızda kurulu olmalıdır. Eğer kurulu değilse, [Node.js resmi web sitesinden](https://nodejs.org) LTS versiyonunu indirebilirsiniz.

**Başlangıç:**

1. **Create Repo From Template & Clone:**

   - Sağ üstteki yeşil "Use this template" butonu ile, bir kopya oluşturun. işlemi tamamlandıktan sonra, kendi GitHub hesabınızda yer alan depo bağlantısını kopyalayın.
   - VS Code'u açın ve terminali başlatın. Aşağıdaki komutu kullanarak depoyu bilgisayarınıza klonlayın:
     ```sh
     git clone <Yeni-Repo-URL'niz>
     ```
   - Örnek:
     ```sh
     git clone https://github.com/sizin-hesabiniz/fsweb-s6-bonus-challenge-react-pizza
     ```

2. **VS Code'da Geliştirmeye Başlamak:**
   - VS Code'u açın ve `File -> Open Folder` seçeneğiyle projeyi açın.

- Terminalde aşağıdaki komutları sırasıyla çalıştırarak proje bağımlılıklarını yükleyin ve projeyi başlatın:
  ```sh
  npm install
  npm run dev
  ```

3. **Geliştirmeye Başlayın** 🤓 👩‍💻 🧑‍💻

#### Proje Yapısı

- `src/`: Tüm React bileşenlerinizin ve dinamik import edilen dosyaların bulunduğu dizin.
- `public/`: Statik dosyaların bulunduğu dizin.
- `App.jsx`: Ana uygulama bileşeni.
- `src/assets/`: import ederek, bileşenlerde kullanacağınız dizin. (kullanım örneği için App.jsx proje dosyasını inceleyin)
- `public/assets/`: import etmeden, projede kullanacağınız tüm resim ve diğer statik dosyalar sizin için önden dışarı aktarıldı. (kullanım örneği için App.jsx proje dosyasını inceleyin)

#### Renk Kodları

1. Sarı #FDC913
2. Açık Gri: #5F5F5F
3. Koyu Gri #292929
4. Kırmızı #CE2829
5. Bej: #FAF7F2

#### Tasarımda Kullanılan Fontlar

Logo proje klasöründe SVG olarak yüklü

- [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed)
- [Barlow](https://fonts.google.com/specimen/Barlow)
- [Quattrocento](https://fonts.google.com/specimen/Quattrocento)
- [Satisfy](https://fonts.google.com/specimen/Satisfy)


#### Proje Yönergeleri

- `src/components`: React bileşenlerini burada oluşturun.
- `src/App.jsx` dosyasını düzenleyerek uygulamanın ana yapısını oluşturun.
- `useState` hooku kullanarak, statik içeriği componentlere aktarın.
- Tekrar eden öğeler için bilşenler kullanın ve proplar ile veri aktarın.
- Routing ile sayfalar arası navigasyon sağlayın.
- Figma tasarımını ([S6 Pizza v2.1 Mobil]([https://www.figma.com/design/q0xPW5uCel3rdzFgpjR9lt/S7-Challange-v2.1?node-id=0-1&t=YaF1bwQuJY7HrwS4-1])) referans alarak CSS (`App.css`) ile sayfaları ve bileşenleri.

**Kaynaklar:**

- **Figma Tasarımı:** [S6 Pizza v2.1 Mobil](https://www.figma.com/design/B6rGWNjWqVyvuB9htLyIMR/S6-Challange-v2.1?node-id=0-1&t=VGRotef0LapuZ7fQ-1)
- **CSS içerisinde değişken tanımlayıp, yeniden kullanabilmek:** [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- **ReactJS Başlangıç Kılavuzu:** [React Docs](https://reactjs.org/docs/getting-started.html)

## Sorularınız mı Var?

Eğer herhangi bir sorunla karşılaşırsanız, lütfen eğitmeninize başvurun.

İyi eğlenceler ve kodlamalar! 🍕
