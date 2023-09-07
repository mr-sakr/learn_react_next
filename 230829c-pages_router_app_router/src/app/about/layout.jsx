export default function AboutLayout({children}){
    return(
        <div>
            <h3>This is Top</h3>
            {children}
            <h3>This is Bottom</h3>
        </div>
    )
}