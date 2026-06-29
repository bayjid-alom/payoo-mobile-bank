> # **Thinking Process** ```Functionality```

- number input -> maxlength="11"
- password input -> maxlength="4" 

### when press login button
```
- 01. get the mobile number
- 02. get the pin input
- 03. match pin & mobile number
- 03-01. true::::>> alert> homepage

- window.location.replace("/home.html") - 
- window.location.assign("/home.html")

- 03-02. false:::>> alert> return

```

### To set Default number 
- নাম্বার ইনপুটে(Attribute) value="01648771835"

## replace() VS assing()
- window.location.assign("/home.html")
- নতুন page-এ যায়।
- History-তে আগের page থাকে।
- ✅ Back করলে আগের page-এ ফেরা যায়।

<br>

- window.location.replace("/home.html")
- নতুন page-এ যায়।
- History থেকে আগের page মুছে যায়।
- ❌ Back করলে আগের page-এ ফেরা যায় না।












 <br><br>
---

> # **Note:** ```DaisyUI```


### DaisyUI + tailwindCSS connect
```
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

## theme
```
<html lang="en" data-theme="dark">
```
## Adding all themes
```
<link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css" />
```

class hover korle suggestion asle bujhbo tailwind theke asache, 
na asle bujhbo daisyUI theke asche

## 📝 DaisyUI `btn` Notes

```
DaisyUI-এর `btn` ক্লাসে ডিফল্টভাবে `display: flex` থাকে।
তাই icon এবং text উল্লম্বভাবে সাজাতে `flex-col` ব্যবহার করতে হবে।

এছাড়া `btn`-এর একটি fixed height থাকে।
প্রয়োজনে `h-full` ব্যবহার করে height override করা যায়।

```



## 💡 Tailwind vs DaisyUI Class চিনার উপায়

- VS Code-এ কোনো class লিখলে যদি IntelliSense/Suggestion আসে,
- তাহলে সেটি সাধারণত Tailwind CSS utility class।
- 
- আর যদি class-এর suggestion না আসে,
- কিন্তু class কাজ করে (যেমন: btn, card, navbar, hero),
- তাহলে সেটি সাধারণত DaisyUI component class।




