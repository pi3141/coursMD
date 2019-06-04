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

## Utilisation

il faut respecter l'arborescence suivante (ou bien modifier le template pour qu'il trouve les fichiers) :

folder/
+-- folder/
¦   +-- folder
¦          +--src
+-- .resources/
¦   +-- jquery.min.js
¦   +-- img.html
¦   +-- myScripts.js
¦   +-- myStyles.js
¦   +-- myTemplate.html
¦   +-- printPrince.css
¦   +-- printProfPrince.css

Les commandes à utiliser sont les suivantes : 

    path\to\pandoc.exe %1  --template "path\to\.resources\myTemplate.html" --resource-path \path\to\.resources\;. --mathml -o %sortie%
    "path\to\prince" %sortie% --no-author-style -s "path\to\.resources\printPrince.css" --page-margin=10mm  --media=screen
    "path\to\prince" %sortie% --no-author-style -s "path\to\.resources\printPrinceProf.css" --page-margin=10mm  --media=screen -o %~n1.prof.pdf

Il est possible de simplement glisser le fichier markdown sur compileWin.bat pour avoir le fichier html et les pdf.
Attention à bien modifier les dossiers dans le fichier batch.


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