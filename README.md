
# 📝 Task Manager using Laravel with CRUD Functionality and Image Upload

A simple **Task Manager** web application built using **Laravel** that supports full **CRUD operations** and **image uploads** for each task.

![Laravel Task Manager Screenshot](https://raw.githubusercontent.com/NirlepSanap/Task-Manager-using-Laravel-with-CRUD-functionality-and-image-upload/main/public/screenshot.png)

---
Deploy Live link : https://task-manager-using-laravel-with-crud.onrender.com/

## 🚀 Features

- Create, Read, Update, Delete (CRUD) tasks
- Upload and display images for each task
- Mark tasks as complete/incomplete
- Set due dates for tasks
- Responsive Blade-based UI
- Laravel validation and file handling

---

## 📂 Folder Structure

```
├── app/
├── bootstrap/
├── config/
├── database/
├── public/
│   └── uploads/           # Uploaded images are stored here
├── resources/
│   └── views/             # Blade templates
├── routes/
│   └── web.php            # All web routes
├── storage/
├── .env.example           # Example environment file
├── composer.json
├── Dockerfile             # For deployment on Render
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/NirlepSanap/Task-Manager-using-Laravel-with-CRUD-functionality-and-image-upload.git
cd Task-Manager-using-Laravel-with-CRUD-functionality-and-image-upload
```

### 2. Install Dependencies

```bash
composer install
npm install && npm run dev
```

### 3. Set Up Environment

```bash
cp .env.example .env
php artisan key:generate
```

Update your `.env` file with the appropriate **DB credentials**.

### 4. Run Migrations

```bash
php artisan migrate
```

### 5. Serve the App

```bash
php artisan serve
```

Visit [http://localhost:8000](http://localhost:8000)


---


## 📸 Screenshots

| Task List | Create Task | Edit Task |
|-----------|-------------|-----------|
| ![List](public/screenshots/list.png) | ![Create](public/screenshots/create.png) | ![Edit](public/screenshots/edit.png) |

> *Add your own screenshots to `public/screenshots/` and update these links above.*

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Nirlep Sanap**  
[GitHub](https://github.com/NirlepSanap) | [LinkedIn](https://linkedin.com/in/nirlepsanap)
