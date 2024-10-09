# Episode 39: Installation 
## Instal frontend:
> npx creat-next-app f

## Install Backend:
> composer create-project laravel/laravel b

يمكنك إنشاء datanase من خلال ال VsCode Editor ، وذلك من خلال تحميل database client extension وستجدها مثبتة بالشريط أقصى اليسار، ويمكن عمل Right Click وإضاقتها أو حذفها.

ويمكن عمل Connect وإضافة database جديد والتعديل عليها والتحكم فيخا وفي الجداول.

--------------------------------

# Install Bootstrap:

لكي يتم تسطيب ال bootstrap : 

> npm install bootstrap@5.3.2

ثم في ال Layout يتم عمل import لل bootstrap : 
import 'bootstrap/dist/css/bootstrap.css'

ويتم أيضاً إستدعاء ال bootsrtap.js ، 
مع العلم أنه لابد من جعل ال layout component تكون client وليست  server ،
ليكون الكود النهائي كالتالي :

```js
'use client'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'


export const metadata = {
  title: 'Nagib Pro3'
}
export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
    require('bootstrap/dist/js/bootstrap.js')
    }
}, [])
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
```

ال Layout هو ملف يتم تصميم ال Layout به ،
وفي الصفحة الرئيسية لو لم يكون هناك ملف layout.js فسيتم إنشاءه تلقائياً عند عمل npm run dev ،


