import Link from "next/link";


const Links = () => {
    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "Sobre nós",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/posts",
        },
    ]
    
return (
<div>
    {links.map((link=>(
        <link href={link.path} key={links.title}>{link.title}</link>
    )))}
</div>
)
}
export default Links

