# Başlangıç Seviyesi To-Do Listesi Challenge'ı

Bu, React'in temellerini öğrenmek için basit bir To-Do Listesi uygulaması oluşturmayı amaçlayan başlangıç seviyesi bir challange'dır. Amaç, bileşenler oluşturmayı, durumu yönetmeyi ve kullanıcı etkileşimlerini ele almayı anlamanıza yardımcı olmaktır.

## Kurulum

Bu proje, hızlı bir geliştirme deneyimi ve modern stil araçları sağlamak için Vite ve Tailwind CSS kullanır. Başlamak için aşağıdaki adımları izleyin:

1. **Repoyu Klonlayın**

   ```sh
   git clone https://github.com/TheWalkingDevsWS/walker-todo-list
   cd walker-todo-list
   npm install
   ```

2. **Projeyi Çalıştırın**

   ```sh
   npm run dev
   ```

## Proje Yapısı

```
walker-todo-list/
├── public/
├── src/
│   ├── components/
│   │   ├── ToDoInput.jsx
│   │   ├── ToDoItem.jsx
│   │   └── ToDoList.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Bileşenlere Genel Bakış

### 1. **ToDoInput.jsx**

Bu bileşen, yeni görevler için kullanıcı girişini kabul etmekten sorumludur. Bir giriş alanı ve görev eklemek için bir düğme içerir.

- **Props**: `onAddTask` - Kullanıcı bir görev eklediğinde çağrılacak bir fonksiyon.

### 2. **ToDoItem.jsx**

Bu bileşen, listedeki tek bir to-do öğesini temsil eder. Aşağıdaki özelliklere sahiptir:

- Görevin adını görüntüler.
- Görevi tamamlanmış olarak işaretlemek için bir buton.
- Görevi silmek için bir buton.

- **Props**:
  - `task` - `id`, `text` ve `completed` durumu içeren görev nesnesi.
  - `onDeleteTask` - Görevi silmek için fonksiyon.
  - `onToggleComplete` - Tamamlama durumunu değiştirmek için fonksiyon.

### 3. **ToDoList.jsx**

Bu bileşen, `ToDoItem` bileşenlerinin bir listesini oluşturur. Tüm görevleri görüntülemekten ve her `ToDoItem`'a ilgili fonksiyonları iletmekten sorumludur.

- **Props**:
  - `tasks` - Görev nesnelerinin dizisi.
  - `onDeleteTask` - Bir görevi silmek için fonksiyon.
  - `onToggleComplete` - Bir görevin tamamlama durumunu değiştirmek için fonksiyon.

## Tailwind CSS Kurulumu

Bu proje, stil vermek için Tailwind CSS kullanır. Tailwind, bu projede önceden yapılandırılmıştır. JSX dosyalarınızda Tailwind sınıflarını doğrudan kullanarak kolay ve tutarlı stil verebilirsiniz.

Örneğin:

```jsx
<div className="p-4 bg-blue-500 text-white">Merhaba, Tailwind CSS!</div>
```

## Challenge Talimatları

1. **To-Do Listesi Oluşturun**

   - Uygulama, kullanıcıların giriş alanını kullanarak yeni bir to-do öğesi eklemesine izin vermelidir.
   - Kullanıcı "Ekle" düğmesine tıkladığında, görev listeye eklenmelidir.

2. **Görevleri Tamamlanmış Olarak İşaretleyin**

   - Her to-do öğesinin tamamlanmış olarak işaretlenmesi için bir düğmesi olmalıdır.
   - Tamamlandığında, öğe görsel bir gösterime sahip olmalıdır (ör. üstü çizili metin).

3. **Görevleri Silin**

   - Her to-do öğesinin, onu listeden kaldırmak için bir silme düğmesi olmalıdır.

4. **Görevleri Yerel Durumda Saklayın**

   - Görev listesini yönetmek için `useState` kancasını kullanın.
   - Opsiyonel: Görevleri yerel depolamaya kaydedin, böylece sayfa yenilendiğinde görevler kaybolmaz.

## Örnek İş Akışı

- Kullanıcılar, bir giriş kutusuna yazarak ve "Ekle" düğmesine tıklayarak görev ekleyebilir.
- Her görev, giriş alanının altında bir listede görünür.
- Kullanıcılar, görevleri tamamlanmış olarak işaretleyebilir veya listeden silebilir.

## Önerilen Geliştirmeler (Opsiyonel)

- Filtreleme işlevselliği ekleyin (ör. "Tümü", "Aktif", "Tamamlanmış" görevler).
- Boş görev eklenmesini önlemek için doğrulama ekleyin.
- Görevleri tarayıcı oturumları arasında kalıcı hale getirmek için yerel depolamayı kullanın.

Öğrendikçe serbestçe değiştirin ve daha fazla özellik ekleyin! Amaç, React'in temelleri, durum yönetimi ve bileşen etkileşimleri konusunda pratik deneyim kazanmaktır.
