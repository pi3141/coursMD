# coursMD

Cha�ne �ditoriale pour produire des cours pour �l�ves, un support de projection et un cours pour l'enseignant.
D�mo ici : 

## Fonctionnalit�s

Il s'agit simplement d'un template pour pandoc contenant du HTML5/CSS/JS.

* fichier source en markdown (pandoc markdown)
* possibilit� de faire appara�tre des �l�ments au clic, ou � la t�l�commande
* possibilit� de faire les corrections dans le fichier
* mise en forme adapt�e au cours
* facilement personnalisable en �ditant le CSS
* il est possible de produire un pdf (avec princexml)

## Utilisation

il faut respecter l'arborescence suivante (ou bien modifier le template pour qu'il trouve les fichiers) :

folder/
+-- folder/
�   +-- folder
�          +--src
+-- .resources/
�   +-- jquery.min.js
�   +-- img.html
�   +-- myScripts.js
�   +-- myStyles.js
�   +-- myTemplate.html
�   +-- printPrince.css
�   +-- printProfPrince.css

Les commandes � utiliser sont les suivantes : 

    path\to\pandoc.exe %1  --template "path\to\.resources\myTemplate.html" --resource-path \path\to\.resources\;. --mathml -o %sortie%
    "path\to\prince" %sortie% --no-author-style -s "path\to\.resources\printPrince.css" --page-margin=10mm  --media=screen
    "path\to\prince" %sortie% --no-author-style -s "path\to\.resources\printPrinceProf.css" --page-margin=10mm  --media=screen -o %~n1.prof.pdf

Il est possible de simplement glisser le fichier markdown sur compileWin.bat pour avoir le fichier html et les pdf.
Attention � bien modifier les dossiers dans le fichier batch.


## Documentation

La syntaxe markdown de pandoc est utilis�e [voir ici pour plus d'info](https://pandoc.org/MANUAL.html#pandocs-markdown)
Il est possible d'ajouter du [[\latex]]

### Les classes particuli�res

 Class      effet
-------    --------------------------------------------------------------------------------------------
 h           masque les �l�ments. Affiche au clic
 visu        s'applique au image. affiche une icone pour corriger l'activit�.
 r           met le texte en rouge
 encR        encadre en rouge
 details     �l�ments sur fond gris. Ce qui ne sera pas not� dans le cahier
 notes       notes pour l'enseignant. Visible dans l'infobulle
 exercices   exercices � donner. S'affiche au survol
 mat�riel    ne s'affiche que dans le pdf du prof
 u           souligne le texte
 i           texte en italique
 w80         applique une largeur de 80% (existent aussi w60,w40,w20)
 editV       emplacement �ditable pour la correction
 act         r�f�rence d'une activit� du livre
 vid�o       int�gre une vid�o dont le chemin et le contenu html de l'�l�ment ayant la classe vid�o