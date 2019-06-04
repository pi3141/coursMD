# coursMD

Chaîne éditoriale pour produire des cours pour élèves, un support de projection et un cours pour l'enseignant.
Démo ici : 

## Fonctionnalités

Il s'agit simplement d'un template pour pandoc contenant du HTML5/CSS/JS.

* fichier source en markdown (pandoc markdown)
* possibilité de faire apparaître des éléments au clic, ou à la télécommande
* possibilité de faire les corrections dans le fichier
* mise en forme adaptée au cours
* facilement personnalisable en éditant le CSS
* il est possible de produire un pdf (avec princexml)

## Installation

Respecter l'arborescence suivante (ou bien modifier le template pour qu'il trouve les fichiers) :

    ├── folder
    │   ├── folder
    │   │   ├── compiledCourse.html
    │   │   ├── src
    │   |        ├── source.md
    ├── .resources
    │   ├── jquery.min.js
    │   ├── img.html
    │   ├── myScripts.js
    │   ├── myStyles.js
    │   ├── myTemplate.html
    │   ├── printPrince.css
    │   ├── printProfPrince.css

### Pour windows

Dans le fichie compileWin.bat éditer les chemins de pandoc et prince, et le chemin du dossier .resources.
Faire glisser le fichier markdown source sur compileWin.bat pour générer le fichier html et les pdf.

## Documentation

La syntaxe markdown de pandoc est utilisée [voir ici pour plus d'info](https://pandoc.org/MANUAL.html#pandocs-markdown)
Il est possible d'ajouter du [[\latex]]

### Les classes particulières

 Class      effet
-------    --------------------------------------------------------------------------------------------
 h           masque les éléments. Affiche au clic
 visu        s'applique au image. affiche une icone pour corriger l'activité.
 r           met le texte en rouge
 encR        encadre en rouge
 details     éléments sur fond gris. Ce qui ne sera pas noté dans le cahier
 notes       notes pour l'enseignant. Visible dans l'infobulle
 exercices   exercices à donner. S'affiche au survol
 matériel    ne s'affiche que dans le pdf du prof
 u           souligne le texte
 i           texte en italique
 w80         applique une largeur de 80% (existent aussi w60,w40,w20)
 editV       emplacement éditable pour la correction
 act         référence d'une activité du livre
 vidéo       intégre une vidéo dont le chemin et le contenu html de l'élément ayant la classe vidéo
