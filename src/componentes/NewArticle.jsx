export default function NewArticle({tittle,parrafo}) {
  return (
    <article className="h-[165px] border-b-2 border-Grayishblue py-7
    last:border-none">
        <h2 className="cursor-pointer hover:text-Softorange duration-200 text-[20px]
        mb-3 font-bold">{tittle}</h2>
        <p className="text-[20px]">
            {parrafo}
        </p>
    </article>
  )
}
