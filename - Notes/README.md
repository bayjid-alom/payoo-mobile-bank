## Process 
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
# 📝 Notes

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

