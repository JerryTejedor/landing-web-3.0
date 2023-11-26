import { Article } from "./Article"
import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-top-laptops.jpg'
import img3 from '../assets/images/image-gaming-growth.jpg'

export const ArticleContainer = () => {
  return (
  <section className="mt-12 mb-12 md:flex gap-10">
    <Article
    img = {img1}
    numero = '01'
    subTittle = 'Reviving Retro PCs'
    texto = 'What happens when old PCs are given modern upgrades'
    />
    <Article
      img = {img2}
      numero = '02'
      subTittle = 'Top 10 Laptops of 2022'
      texto = 'Our best picks for various needs and budgets.'
    />
    <Article 
    img = {img3}
    numero = '03'
    subTittle = 'The Growth of Gaming'
    texto = 'How the pandemic has sparked fresh opportunities.'
    />

  </section>)
}






