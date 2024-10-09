## Icon Library ( Lucide ) : 
بنسطبها كالتالي :

> npm install lucide-react

الموقع الرسمي : 
https://lucide.dev/guide/installation

ثم نقوم بإستخدامه في اي مكان في الصفحة 
بإستدعاء الأيقونة كالتالي في ايقونة سهم لليمين داخل دائرة: 

```ts
import { ArrowRightCircle } from "lucide-react";
.
.
.
<ArrowRightCircle className="inline ml-1 w-4 h-4"/>
```


-------------------------
## Icon in Tap
عشان تعمل ايقونة وتظهر بال browser tab وال Home screen للهاتف ومحركات البحث بجانب الدومين ، عليك اتباع احدى الطريقتين :

### - Using image files (.ico, .jpg, .png)
ممكن تحط ملف الصورة الخاصة بال icon بأي من هذه الأسماء : [favicon & icon & apple-icon] ، وخد بالك ان هناك امتدادات معينة صالحة لكل اسم ، فلو هتسمي الصورة باسم favicon فالإمتداد المتاح لها .ico كالتالي : favicon.ico ،  
ولو هتسميها icon فعندنا للاسم ده اكتر من امتداد كالتالي : .ico, .jpg, .jpeg, .png, .svg  
ولو هنسميها apple-icon فالإمتدادات المتاحة : 	.jpg, .jpeg, .png

<br/>

وبالنسبة لمكان حفظ الأيقونة :
فلو اسمها favicon فلازم يكون مكانها مباشرة داخل فولدر ال app في ال top level ،  
لكن لو هنسميها icon أو apple-icon فممكن نحطها داخل أي مجلد داخل ال app .
<br/>
<br/>
<br/>

### - Using code to generate an icon (.js, .ts, .tsx)
Read The Documentation

---------------------------

<br>
<br>

في ال Navbar لو عندي مجموعة من اللينكات ، ممكن اكتبهم في ملف لوحده باسم مثلا nav-links.tsx داخل فولدر نقوم بإنشاءه بنفس مستوى ال app بإسم constants ونقوم بكتابة هذه اللينكات بالملف كالتالي :

```ts
export const NavLinks = ['features', 'pricing', 'testimonials', 'contact']
```

------------------

<br>
<br>

## Interface

ال interface ده بنستخدمه في ال typescript لتحديد انواع عناصر ال class  
فمثلاً بالكود التالي تم إنشاء component بإسم Heading :  

```ts
interface HeadingProps{
    title:string,
    isCentered:boolean
}
export default function Heading({ title, isCentered }: HeadingProps){
    return(
        <div>
            <div className="text-2xl font-semibold text-sky-500">{title}</div>
            <div className="text-sm">{isCentered}</div>
        </div>
    )
}
```

ويتم إستخدامه في الصفحة أو المكان المطلوب كالتالي : 

```ts
<Heading title="ttt" isCentered={true}/>
```

----------------------

## import { FC } from "react"

هو اختصار لـ "Function Component" ، وهو نوع مدمج معرف في مكتبة React. يُستخدم FC لتعريف ال function component في TypeScript.

استيراد { FC } من "react" يتيح لك استخدام FC كنوع لتعريف ال function components. يتكون FC من نوع عبارة عن تعبير جبلي (generics expression) ويمكن توسيع العبارة الجبلية لتحديد الأنواع المتوقعة لخصائص الدخل والقيمة المعادة للمكون الوظيفي.

على سبيل المثال، يمكنك استخدام FC كالتالي:  
```ts
import React, { FC } from 'react';

interface MyComponentProps {
  name: string;
  age: number;
}

const MyComponent: FC<MyComponentProps> = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};
```
في هذا المثال، تم استيراد FC من مكتبة "react" واستخدمناه في تعريف ال function component MyComponent. قمنا أيضًا بتحديد MyComponentProps كنوع عبارة جبلية لـ FC ، مما يعني أن المكون يتوقع خصائص name و age بناءً على النوع المحدد.

استخدام FC يساعد على تحسين تجربة تطوير React في TypeScript عن طريق تحسين تحليل النوع وتوفير معلومات أكثر وضوحًا حول المكونات الوظيفية.

---------------------------

<br/>
<br/>

## Responsive Navbar:
عشان نعمل navbar يتماشى مع كل الشاشات ، فهنعمل component باسم Header مثلاً ، وهيتكون من Logo و Links بالشاشات الكبيرة ،  
وفي الموبايل هيظهر فقط ال Logo وجانبها ايقونة تدل على المنيو ، عند الضغط عليها تظهر ال Links الموجودة بال Navbar ، كالتالي :  

```ts
import Logo from "@/components/Logo";
import { NavLinks } from "@/constants/nav-links";
import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Navbar(){
    return(
        <header className="fixed top-0 left-0 bg-slate-900/50 w-full backdrop-blur-md z-30">
            <div className="relative container py-6 flex justify-between">
                <Logo/>
                
                <nav className="hidden md:flex">
                    {NavLinks.map((link, index)=>(
                    <Link key={index} href={`/${link}`} className="px-2 capitalize text-sm font-semibold text-slate-200 tracking-wide">{link}</Link>
                    ))}
                </nav>

                {/* Mobile Navigation */}
                <MobileNav/>
            </div>
        </header>
    )
}
```

وبالنسبة لل Logo component فيكون كالتالي :  

```ts
import Image from "next/image";
import Link from "next/link";

export default function Logo(){
    return(
        <Link href='/' className="flex items-end gap-2">
            <Image src='/logo.png' alt="Logo" width={30} height={30}/>
            <div className="relative">
                <h1 className="capitalize">Ocean</h1>
                <div className="absolute -right-2.5 bottom-1.5 w-2 h-2 rounded-full bg-sky-700"></div>
            </div>
        </Link>
    )
}
```

بالنسبة لل MobileNav فيكون كالتالي :  

```ts
'use client'

import { NavLinks } from "@/constants/nav-links";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav(){
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu(){
        setIsOpen(!isOpen);        
    }

    return(
        <div>
            <div className="flex md:hidden cursor-pointer" onClick={toggleMenu}>
                {!isOpen ? <Menu/> : <X /> }
                
            </div>
            <figure className={`absolute right-2 origin-top top-20 
            ${isOpen ? "scale-y-100 opacity-100 visible" : "scale-y-50 opacity-0 hidden"} 
            p-2 transition-all z-50`}>
                <nav className="flex flex-col bg-slate-800/90 p-2 rounded">
                    {NavLinks.map((link,index)=>(
                        <Link key={index} href='/' onClick={toggleMenu} className="cursor-pointer bg-slate-900 hover:bg-slate-700 transition-all duration-200 p-1 rounded mb-2">{link}</Link>
                    ))}
                </nav>
            </figure>
        </div>
    )
}
```

----------------------

## Text Gradient Color:

لو عايز تكتب نص يكون عريض ولونه يكون gradient يمكنك ذلك بإستخدام بعض ال classes في ال Tailwind كالتالي :  
```ts
<div className="bg-clip-text text-transparent bg-gradient-to-tr from-sky-200 via-sky-500 to-sky-200 text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat.</div>
```

----------------------

## Button Component:

لو عندي button متكرر في الموقع وله مثلاً 3 ألوان مختلفة ، ممكن نعمل component له كالتالي :  

```ts
import { FC, ReactNode } from "react"

interface ButtonProps{
    variant?: "primary" | "secondary" | "outline",
    isFullSize?: boolean,
    children: ReactNode
}

const Button:FC<ButtonProps> = ({variant ="primary", isFullSize, children}) =>{
    return(
        <button className={`btn ${variant==="primary"?"btn-primary":variant==="secondary"?"btn-secondary":"btn-outline"} `}>{children}</button>
    )
}
export default Button;
```

وتم إستخدامهم كالتالي :  

```ts
<div className="flex items-center gap-4">
  <Button variant="primary">
    Get Started
    <MoveRight/>
  </Button>
  <Button variant="outline">View Pricing</Button>
</div>
```

لاحظ أنه تم إستخدام ReactNode لكتابة المحتوى ك children.  

----------------------------------------

لو عندنا section فيه العديد من الصور او الكروت المتشابه في الخواص ، وهذه العناصر ثابتة
مثل ال links أو عملائنا او اياً من هذا القبيل ،
فيمكن عمل مجلد كما قلنا سابقاً باسم constants ، ونعمل ملف خاص بالعملاء والبيانات المختلفة كـ objects داخل array ،  
<br/>
<br/>
ولكن لاحظ أننا سوف نعمل interface لتحديد انواع البيانات الخاصة بقائمة العملاء،  
فمن الأفضل عمل مجلد باسم types نقوم فيه بتحزين ال types واستدعائها ،  
ففي حالتنا الحالية قائمة العملاء نقوم بإنشاء ملف بإسم interfaces.ts داخل مجلد types ونكتب به ال interface التالي :  

```ts
export interface Client{
    src:string,
    alt:string,
}
```

وفي ال constant نقوم بإنشاء ملف لل clients.ts كالتالي :  
```ts
import { Client } from "@/types/interfaces"
export const clients:Client[] = [
    {
        src:'/companies/company-1.svg',
        alt: 'cerclo'
    },
    {
        src:'/companies/company-2.svg',
        alt: 'minimal'
    },
    {
        src:'/companies/company-3.svg',
        alt: 'towny'
    },
    {
        src:'/companies/company-4.svg',
        alt: 'shapa'
    },
    {
        src:'/companies/company-5.svg',
        alt: 'yendo'
    }
]
```
لاحظ أنه تم عمل import لل Client Interface وتم إستخدامه في ال constants  

وبالتالي يتم إستخدامه في الصفحة كالتالي :  
```ts
<section id="clients" className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-1 gap-y-4">
  {clients.map((client, index)=>(
    <Image key={index} src={client.src} width={120} height={80} alt={client.alt} className="w-40 mx-auto"/>
  ))}
</section>
```

