import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'

function App() {
  const [isDark, changeTheme] = useState(true);

  useEffect(()=>{
    if(isDark){
      document.body.style.backgroundColor = "#0a1929";
      document.body.style.color = "#d8dee9";
    }else{
      document.body.style.backgroundColor = "#F8F8FA";
      document.body.style.color = "#0a1929";
    }
  },[isDark]);

  return (
    <div className="App">
      <Navbar isDark={isDark} themeUpdate={changeTheme}/>
      <div id="google_translate_element" style={{float: 'right', margin: "5px"}}></div>
      <div style={{margin: 'auto', textAlign: 'justify', padding: '20px'}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corrupti autem mollitia obcaecati quasi quam magni, dolorem alias deserunt veniam praesentium illum fugit. Esse, similique. Molestiae fuga similique quis suscipit ipsum aut, odio cumque, tempora modi exercitationem laudantium minus, architecto velit sunt quaerat eligendi eum animi rem impedit consequatur alias dolorum rerum sint maiores. Consequatur provident voluptatem quis assumenda corporis eligendi iusto! Facilis facere, asperiores sint adipisci pariatur soluta, cumque officiis amet illum rem, maxime distinctio iste ipsa aperiam! Pariatur quasi impedit culpa dolorem reprehenderit delectus, soluta nesciunt tenetur ratione fuga officiis vero inventore ullam qui, ipsa reiciendis sapiente cum repudiandae aliquam dignissimos rerum veritatis! Sequi vel quod similique illo voluptate suscipit minima ipsa deleniti consequuntur dolorum voluptates eos omnis ducimus, dicta reprehenderit officia laboriosam temporibus dolorem maiores qui quia illum velit! Dignissimos modi alias quis saepe repellat repudiandae nisi sequi minus pariatur praesentium? Sapiente, voluptatum. Et corrupti nihil esse recusandae. Dolorem tempora molestiae dignissimos ex at, magnam minima voluptates illo possimus voluptatum alias ab quidem! Alias amet repudiandae laboriosam consequuntur tempore, illum dolores culpa maxime voluptas nam eos. Eveniet architecto maiores illum! Eaque magnam quisquam provident expedita dolorem tempora quos corporis, laboriosam inventore blanditiis praesentium earum eius alias! Ipsam incidunt unde ad totam illum dolore voluptates neque porro? Cumque numquam nulla voluptatem laudantium quas optio voluptas distinctio iusto culpa.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia laborum fugiat explicabo inventore. Dolorem similique eveniet ea, fuga nostrum ipsam explicabo ullam perferendis corporis voluptatem officiis pariatur magnam alias eaque cum odio rerum omnis quibusdam fugiat natus quae accusantium qui. Dolor sapiente eveniet fugiat excepturi, suscipit non dolore quasi voluptatem repellendus nam accusamus fuga obcaecati minus autem tempora distinctio consequuntur unde deleniti enim ab temporibus cum, nostrum architecto? Suscipit velit nostrum eius facere harum animi sapiente dicta quos natus dignissimos, magni consequuntur nobis neque earum pariatur illo excepturi architecto nemo nesciunt ipsa quidem cumque laborum eveniet tempore? At magni voluptate aut delectus nostrum sed omnis eveniet, vel mollitia dignissimos autem error esse, repellendus qui possimus quidem beatae facilis! Ducimus quidem neque facere officiis animi qui praesentium illum tempora ad labore nisi sed, delectus quae recusandae cupiditate doloribus, quis dolor dignissimos architecto quas! Earum, soluta impedit. Obcaecati nihil sit temporibus ex et. Illo dolores minima iure soluta qui ex explicabo. Aliquam veniam repellendus repellat aliquid fugit velit porro sapiente ut temporibus, similique quasi autem, quidem est doloremque delectus beatae dolorem sed. Ullam laudantium rerum voluptatem temporibus repellat voluptate saepe aliquam id quasi atque excepturi ipsum sed amet reprehenderit libero placeat, perferendis inventore adipisci velit. Quas, enim dignissimos quod explicabo ipsum sequi vel praesentium et reiciendis deleniti incidunt tenetur ipsa recusandae alias vitae rerum quaerat quasi, suscipit eaque delectus. Harum, mollitia! Odio tempore, ratione sapiente id libero soluta autem! Sit voluptas quia aut vel optio ad a recusandae pariatur veritatis dolorem! Esse deleniti itaque, in mollitia nihil ea hic. Assumenda iusto sequi laboriosam vel quod aliquam. Atque natus ducimus labore sint dolorum eveniet iste aliquam quidem laudantium, inventore molestias et officia soluta assumenda consequatur incidunt recusandae! Aliquam deserunt cupiditate accusamus nisi recusandae saepe quidem atque commodi odit distinctio iure, quae quas laborum incidunt quam odio sunt aut dignissimos facilis necessitatibus suscipit ratione! Laborum, facere! Totam blanditiis qui fugiat voluptatem molestias cum? Sequi, odio, et porro obcaecati officiis mollitia similique nobis cumque repellat temporibus expedita ab optio ullam corporis earum! Expedita necessitatibus, praesentium doloremque dolores veritatis dicta explicabo veniam sit obcaecati, voluptatum aliquid ipsa sunt numquam aspernatur facere libero magnam architecto fugiat ea eveniet repellat odio eius totam? Eos architecto ullam natus est eligendi perferendis eaque hic ea placeat tempora. Beatae ducimus aspernatur sequi sit aliquam, modi porro neque natus inventore totam nisi deleniti mollitia nam molestias. Beatae illo ullam laudantium saepe quibusdam minima commodi reprehenderit consectetur animi id quae, expedita aut itaque debitis maxime culpa recusandae dolores nam omnis laborum earum dolorum enim odio. Cum ad totam voluptatum adipisci cupiditate perferendis voluptatem harum est impedit id? Odit mollitia assumenda facilis vitae. Commodi, iure provident. Dolorum possimus, voluptatibus autem minus fuga maxime quibusdam unde recusandae ad nisi obcaecati dolore impedit corrupti eligendi vitae numquam odit, dolor enim error natus, doloribus neque? Tenetur assumenda ab fuga dolorum officia voluptas quod sit temporibus animi nostrum cum ratione architecto sed, expedita vero quo nobis placeat amet accusantium a cumque magnam. Dolore, nemo odio fugiat eos, soluta optio, ipsa accusamus ea atque voluptatibus veritatis sint? Minima saepe totam reprehenderit non ut. Eaque illum soluta debitis, praesentium esse nihil magni aspernatur cum quibusdam dolor, officiis mollitia dolore quia fuga recusandae aliquid! Culpa, consectetur quaerat praesentium aliquam repellat expedita explicabo consequuntur sint illum dicta minima dolorem non quae debitis. Beatae numquam aliquam quia dolore maxime voluptatem ipsa natus ratione harum? Repellendus exercitationem, excepturi totam debitis voluptates dolore officia magnam nisi. Optio, deserunt magnam enim error quibusdam incidunt quam dolore, assumenda totam harum recusandae. Asperiores sint dolores aliquid ipsum voluptatibus! Necessitatibus laborum in ipsam eum omnis est similique, officiis provident quidem modi laudantium perferendis deleniti doloribus quis facere molestiae odio debitis consequatur incidunt nostrum alias perspiciatis ex at. Error vel, quae suscipit quaerat tenetur ab minus, sint accusantium dolor adipisci eligendi quia earum magni veritatis? Placeat sit minus adipisci eaque maiores itaque aperiam beatae, alias doloribus dolore harum impedit aut magni, voluptates architecto dolor esse eum ex soluta laboriosam blanditiis. Labore dolore non amet natus sunt, ut ad harum, eius, ullam explicabo reprehenderit enim? Cupiditate hic libero autem perferendis recusandae fuga ea unde voluptas, omnis beatae asperiores ducimus deleniti ut assumenda veniam possimus nam sequi iusto, quam, dicta porro maxime quae optio. In corporis recusandae voluptas quasi asperiores impedit, ipsa veniam dolores labore omnis architecto error tempora atque voluptatem facere dolore nihil qui numquam vitae possimus. Amet delectus, porro, repellendus odit soluta voluptatum sapiente earum sit dolores eligendi dignissimos debitis ratione ut voluptatibus officia facere maxime est harum deserunt maiores quisquam sequi. Nemo soluta beatae, tenetur tempora suscipit est itaque illo nihil natus, at deleniti iste nisi id culpa, consequatur ad eaque libero consequuntur similique? Obcaecati soluta dolores explicabo similique assumenda quas dolorum sunt, nobis molestiae odit vel rerum, totam eius corrupti? Soluta beatae laboriosam error quae perferendis eaque inventore sed ducimus amet tempora expedita, repudiandae recusandae quibusdam, rem molestiae maiores! Adipisci magni esse consequuntur sint dolores minus odio facere suscipit, molestiae ducimus velit eaque repellat cupiditate aut nemo similique. Corporis, iusto architecto. Accusamus error reprehenderit optio eum porro aliquid reiciendis minus? Omnis corrupti aperiam enim quae necessitatibus sit incidunt magnam temporibus molestias. Doloribus autem deserunt repellat voluptatibus minima illo! Similique at cupiditate reprehenderit? Ipsa quidem omnis magni, placeat totam cupiditate soluta et similique. Magnam esse doloremque eum iure praesentium ad obcaecati laboriosam, accusamus saepe deserunt aliquid totam minima repellat cupiditate. Soluta magnam reprehenderit eos at aperiam? Deleniti reiciendis, voluptas dolorum sed ab atque at deserunt facere distinctio facilis consequuntur corporis iste saepe, enim non dolor quas est ducimus aspernatur aut? Adipisci rerum alias consequatur eius reiciendis, magnam sed nulla nihil cumque officiis repellat fugiat illum deleniti laborum eligendi, rem dicta totam fugit? Asperiores ut voluptate corporis a quo dolorem suscipit quos ratione? Tempore quod quis quia aspernatur, inventore ab, facilis ex a dolorem, adipisci necessitatibus maxime ipsum pariatur perferendis. Tempore, autem. Corrupti qui quibusdam minus distinctio harum perferendis, saepe tenetur hic corporis aliquid. Ab dolorum quos quasi omnis aliquam impedit, labore eveniet nam officiis porro consequuntur blanditiis delectus sit.
      </div>
    </div>
  )
}

export default App
