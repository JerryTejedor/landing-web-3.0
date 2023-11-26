import { Header } from "./componentes/header";
import { MainArticle } from "./componentes/MainArticle";
import { NewContainer } from "./componentes/NewContainer";
import { ArticleContainer } from "./componentes/ArticleContainer";
function App() {

  return (
    <main className="px-4 pt-4">
      <Header />
      <div className="lg:flex lg:gap-8">
      <MainArticle />
      <NewContainer/>
      </div>
      <ArticleContainer/>
    </main>
  )
}

export default App
