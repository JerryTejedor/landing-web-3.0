import NewArticle from "./NewArticle";

export const NewContainer = () => {
  return (
    <aside className="bg-Verydarkblue text-Offwhite py-[28px] px-[20px]">
        <h1 className="text-Softorange text-4xl font-bold">New</h1>
        <NewArticle
        tittle = 'Hydrogen VS Electric Cars'
        parrafo = ' Will hydrogen-fueled cars ever catch up to EVs?' 
        />
        <NewArticle 
        tittle = 'The Downsides of AI Artistry'
        parrafo = 'What are the possible adverse effects of on-demand AI image generation?'
        />
        <NewArticle 
        tittle = 'Is VC Funding Drying Up?'
        parrafo = 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
        />
    </aside>
  )
}






