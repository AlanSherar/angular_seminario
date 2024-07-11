import { Component } from '@angular/core';
import { Libro } from './Libro';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrl: './lista-libros.component.scss'
})
export class ListaLibrosComponent {
  libros : Libro[] = [
    {
        "id": 1,
        "title": "vero in",
        "author": "Lucia Spencer",
        "publisher": "Parisian - Littel",
        "pages": 684,
        "synopsis": "Perspiciatis aliquam explicabo a dolor delectus consequuntur officiis eligendi. Fuga odio eveniet deleniti saepe laborum mollitia maxime occaecati debitis. Dolor repellendus laudantium quam accusantium libero. Dolore animi voluptatum tempora.",
        "stock": 137
    },
    {
        "id": 2,
        "title": "mollitia impedit",
        "author": "Miss Ruby Wilderman",
        "publisher": "Rosenbaum - Williamson",
        "pages": 260,
        "synopsis": "Hic beatae unde nobis repellat at. Ipsam maiores sequi sunt explicabo. Repellendus a repudiandae inventore distinctio. Ab porro occaecati reiciendis ex voluptatibus architecto.",
        "stock": 118
    },
    {
        "id": 3,
        "title": "eaque fugiat",
        "author": "Joe Schuster II",
        "publisher": "Batz - McLaughlin",
        "pages": 465,
        "synopsis": "Voluptate doloribus inventore minima. Voluptatem eum alias vel alias beatae. Enim assumenda placeat. Rerum quos quas.",
        "stock": 8
    },
    {
        "id": 4,
        "title": "explicabo quo",
        "author": "Alicia Murazik",
        "publisher": "Miller - McCullough",
        "pages": 767,
        "synopsis": "Maxime porro sed voluptates eligendi blanditiis voluptates accusamus. Atque consectetur nemo quae quidem. Velit sapiente natus voluptate nam suscipit quisquam maiores. Commodi velit maxime eos nobis deleniti maiores.",
        "stock": 116
    },
    {
        "id": 5,
        "title": "atque eius",
        "author": "Joseph Mante",
        "publisher": "Kuhn, Rodriguez and Stracke",
        "pages": 147,
        "synopsis": "Tenetur omnis et. Perferendis minus possimus fuga provident similique magnam unde velit. Laboriosam vitae accusantium. Maxime error odio excepturi ducimus in odit id ipsa.",
        "stock": 109
    },
    {
        "id": 6,
        "title": "dolorem voluptatibus",
        "author": "Mable Wolf-Feest",
        "publisher": "Rempel - Reilly",
        "pages": 90,
        "synopsis": "Sit voluptate impedit reprehenderit sed architecto. Architecto nihil incidunt. Recusandae fugit ullam officiis quaerat incidunt. Neque recusandae dolorem perferendis est quibusdam fugit expedita libero.",
        "stock": 116
    },
    {
        "id": 7,
        "title": "asperiores ratione",
        "author": "Wm Schuster",
        "publisher": "Harvey, Rolfson and Mills",
        "pages": 443,
        "synopsis": "Placeat placeat tenetur distinctio facilis doloribus laborum. Labore laborum numquam eveniet labore nobis ullam aut voluptate quo. Cumque modi harum officiis adipisci reprehenderit aperiam beatae nobis. Blanditiis adipisci aspernatur neque quos voluptatum commodi.",
        "stock": 36
    },
    {
        "id": 8,
        "title": "consequatur hic",
        "author": "Miss Pat Wiza",
        "publisher": "Mertz - Abbott",
        "pages": 128,
        "synopsis": "Illum doloribus nihil tempore cupiditate ipsum eos at maiores. Cumque quia a sit laudantium ducimus sequi. Cum tempore nulla deserunt qui dolores voluptatem nesciunt. Saepe quos minima suscipit facere.",
        "stock": 73
    },
    {
        "id": 9,
        "title": "distinctio nihil",
        "author": "Nicole Waelchi",
        "publisher": "Kessler - Hodkiewicz",
        "pages": 375,
        "synopsis": "At odit esse nemo. Id dignissimos facilis voluptatem dolore nisi. Atque enim repellat iusto est distinctio rem facilis ipsam. Placeat occaecati numquam.",
        "stock": 103
    },
    {
        "id": 10,
        "title": "cum laborum",
        "author": "Dr. Eduardo Tromp",
        "publisher": "Walker - Rohan",
        "pages": 189,
        "synopsis": "Quia amet ab a minima officiis numquam. Dolor provident beatae ad voluptates placeat unde deleniti quae libero. Magnam facilis veritatis debitis nulla illum iste aliquam nemo et. Inventore accusamus dignissimos dignissimos odit sunt voluptate.",
        "stock": 16
    },
    {
        "id": 11,
        "title": "beatae harum",
        "author": "Iris Brekke",
        "publisher": "Skiles and Sons",
        "pages": 451,
        "synopsis": "Ex cum consequuntur sequi iure. Animi quasi reprehenderit quasi cupiditate expedita inventore soluta. Ullam ullam officia eius ducimus quam suscipit rem. Voluptas laudantium omnis aperiam accusantium ipsum suscipit.",
        "stock": 95
    },
    {
        "id": 12,
        "title": "inventore necessitatibus",
        "author": "Willie Labadie",
        "publisher": "Rodriguez Group",
        "pages": 441,
        "synopsis": "Maxime ullam officia consectetur et. Quo enim similique velit a dolorum ut tempore esse quos. Iusto consectetur dignissimos. Accusamus reiciendis optio nemo.",
        "stock": 107
    },
    {
        "id": 13,
        "title": "temporibus soluta",
        "author": "Mr. Troy Hoeger",
        "publisher": "Wiza - Hills",
        "pages": 697,
        "synopsis": "Incidunt neque odit numquam iusto laborum. Atque cupiditate excepturi. Nisi ipsa similique quam itaque unde nesciunt. Quas quo assumenda eveniet iusto voluptatibus.",
        "stock": 121
    },
    {
        "id": 14,
        "title": "magni laborum",
        "author": "Omar Gutmann",
        "publisher": "Lowe and Sons",
        "pages": 85,
        "synopsis": "At sed quae quia officiis officia. Assumenda alias quas quidem. Et nam neque minima molestiae quo labore. Minus eum minima doloribus iusto ullam quibusdam.",
        "stock": 129
    },
    {
        "id": 15,
        "title": "esse autem",
        "author": "Rex Wiza",
        "publisher": "King, Douglas and Sauer",
        "pages": 744,
        "synopsis": "Quia similique iure quo dignissimos nobis in odio. Doloremque maiores ut hic perferendis amet. Eius minus aliquid corrupti eum saepe veritatis pariatur. Accusamus architecto possimus magni.",
        "stock": 88
    },
    {
        "id": 16,
        "title": "corrupti amet",
        "author": "Ella Rosenbaum DDS",
        "publisher": "Harber Inc",
        "pages": 307,
        "synopsis": "Quas animi fugit eum laborum similique. Deserunt deserunt odio distinctio nobis commodi labore asperiores earum. Reiciendis ut magni iusto impedit commodi. Architecto totam nobis.",
        "stock": 71
    },
    {
        "id": 17,
        "title": "neque deleniti",
        "author": "Beverly Leuschke",
        "publisher": "Robel, Schaden and Steuber",
        "pages": 284,
        "synopsis": "Amet deserunt eum necessitatibus quam. Suscipit blanditiis quam asperiores corporis laborum sunt explicabo cum. Repudiandae architecto placeat. Ullam deleniti numquam distinctio iste.",
        "stock": 131
    },
    {
        "id": 18,
        "title": "iure maiores",
        "author": "Hugo Grady",
        "publisher": "Altenwerth - Friesen",
        "pages": 420,
        "synopsis": "Pariatur earum fugit. Voluptas necessitatibus magnam sint consectetur consectetur ex similique dolor. Recusandae corrupti vitae at eaque optio omnis sed dolores quidem. Saepe explicabo aliquam dicta.",
        "stock": 38
    },
    {
        "id": 19,
        "title": "sed pariatur",
        "author": "Ramiro Brekke",
        "publisher": "Simonis, Schulist and Nienow",
        "pages": 36,
        "synopsis": "Culpa quis quos. Ipsam eligendi ipsam nulla temporibus nostrum quibusdam. Id porro fugit nostrum mollitia enim rem. Libero laboriosam nobis quidem quaerat dolorem esse perspiciatis voluptates molestias.",
        "stock": 98
    },
    {
        "id": 20,
        "title": "consequatur aliquam",
        "author": "Terri Jacobs",
        "publisher": "Simonis, Kilback and Moen",
        "pages": 351,
        "synopsis": "Totam eius quo eum vel modi ipsum similique. Maxime nihil dolores voluptas quisquam consectetur error maxime odit. Ipsa reiciendis magnam perspiciatis nobis nobis nesciunt ea explicabo quos. Ab dicta iure reiciendis quis doloremque nobis.",
        "stock": 74
    },
    {
        "id": 21,
        "title": "occaecati perspiciatis",
        "author": "Myron Legros IV",
        "publisher": "Grimes - Torp",
        "pages": 257,
        "synopsis": "Cupiditate minima pariatur veniam quae inventore ex impedit fuga laudantium. Numquam distinctio soluta harum quis quibusdam at ipsum ad laudantium. Ipsa suscipit dolorem laboriosam tempora enim eius voluptates nobis odit. Amet sunt earum.",
        "stock": 41
    },
    {
        "id": 22,
        "title": "doloribus in",
        "author": "Susie Quitzon",
        "publisher": "Johns - Bernier",
        "pages": 765,
        "synopsis": "Doloribus tempore blanditiis qui quisquam quod. Reprehenderit possimus exercitationem sed quod asperiores. Debitis accusamus quibusdam ullam doloribus illo iure optio fugit. Reiciendis ipsam facere maiores sapiente temporibus possimus repellat iste aperiam.",
        "stock": 149
    },
    {
        "id": 23,
        "title": "ad autem",
        "author": "Misty Marvin",
        "publisher": "McClure, Ankunding and Bartell",
        "pages": 117,
        "synopsis": "Maxime nesciunt officia a debitis cum molestiae a maiores commodi. Expedita quasi alias a. Corrupti ut non quibusdam sapiente molestiae impedit sequi rerum. Fuga autem provident quos porro accusantium non dolorum.",
        "stock": 108
    },
    {
        "id": 24,
        "title": "animi eligendi",
        "author": "Miguel Abshire",
        "publisher": "Goyette - Ullrich",
        "pages": 398,
        "synopsis": "Tempore eos commodi harum nostrum totam quae vitae expedita maxime. Quaerat occaecati exercitationem dolorem sint nam libero. Ad nobis iste blanditiis. Nihil suscipit esse autem aperiam.",
        "stock": 32
    },
    {
        "id": 25,
        "title": "distinctio mollitia",
        "author": "Jonathon Barton",
        "publisher": "Casper - Powlowski",
        "pages": 326,
        "synopsis": "Culpa modi deserunt quo optio consequatur in. Harum nihil magni molestiae dolor deserunt corporis quis in. Hic consequatur aliquam. Esse perspiciatis qui praesentium.",
        "stock": 95
    }
]


}
