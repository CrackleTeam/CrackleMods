# Crackle Mods
Collection of Crackle mods, downloaded/installed by the menu in Crackle.

## Submitting a mod
To submit a mod, you'll need the mod itself, with these essentials:
```        
changelog.md    // optional
readme.md
manifest.json   // sample found in /SampleMod
script.js
icon.png
```
To change the path/name of any file, you must also change the corresponding attribute in the manifest. For example, if you name your icon "plib_icon_rev01", then you will have to set `icon` in the manifest to `"plib_icon_rev01.png"`.

### Allowed file types / formats:
* Changelog / readme
  *  .md
  *  .txt
    * will automatically check for types:
      * BBCode
      * Markdown
      * HTML (scripts and styles will not be loaded)
    * plain text without formatting will also be allowed
  *  .htm(l) (scripts and styles will not be loaded)
* Icon
  * [all natively supported image formats](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types)
  * [.qoi](https://github.com/phoboslab/qoi)

If the mod is fit for addition, it will be merged into the main repo.
If you are new to modding, you may be unverified until confirmed in the Snap! Forums or if you publish 5 mods.

Mods are submitted over the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html), if not said otherwise.

Submitting a UPDATE to a mod is the same, just fork the repo again, update the mod file, and make sure the commit, in its extra information, contains info about the new update. This will eventually be shown in the mod page in Crackle.
