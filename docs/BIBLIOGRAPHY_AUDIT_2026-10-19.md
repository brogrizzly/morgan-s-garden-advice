# Bibliography and evidence audit — 19 October 2026

Scope: the eight existing Markdown research/journal notes and the NotebookLM JSON prompt in `docs/`, containing **43 distinct original external URLs**. The scan found **34 usable page/data responses, three incorrect or unavailable destinations, and six access limitations**. Separate checks verified replacement links and Crossref bibliographic records. A reachable page establishes its destination, not the accuracy of every claim citing it. The archived application source is outside this bibliography scope.

Historical access dates describe the original notes and have not been replaced by this audit date. Source corrections and link maintenance are identified below.

## Corrections made

| Location | Finding and correction |
|---|---|
| [Title 22 reading links](TITLE_22_CONGRESSIONAL_HISTORY_READING.md) | Both House U.S. Code links returned “Page Not Found - US Code” despite HTTP 200. Replaced them with verified official GPO full-title and chapter links explicitly labeled **2024 edition**, and added a dated maintenance note. |
| [Creative influences](G4LO_CREATIVE_INFLUENCES.md), KRS-One | The former biography returned HTTP 404 with a Wix domain-connection error. Replaced it with a verified Wikipedia reference biography, labeled as such. The author's account of the influence is preserved. |
| [MSSS checkpoint](MSSS_OFFLINE_FIRST_ARCHON_CHECKPOINT_2026-08-27.md), plant-virology research anchors | Crossref confirms DOI 10.1094/MPMI-05-10-0116 belongs to **Yoselin Benitez-Alfonso, Christine Faulkner, Christophe Ritzenthaler, and Andrew J. Maule**. Corrected the erroneous Ueki/Citovsky attribution and supplied journal/date/pages. Added the verified canonical DOI and publication details for the Carrington paper; its former PMC URL returned a challenge page, which does not establish an identifier error. |
| MSSS checkpoint, Stokes' theorem | Doubled backslashes were JSON-style escaping inside a Markdown math block. Restored ordinary LaTeX commands so the formula can render. |
| [Weather/biology whitepaper](WEATHER_BIOLOGY_MATH_WHITEPAPER.md), sections 3.3–3.4 | Distinguished paired temperature/humidity VPD estimates from daily FAO-56 inputs: nonlinear saturation pressure means daily means are an approximation. Supplied the input units required by the daily evapotranspiration equation. The existing Allen et al. FAO-56 citation remains the method reference. |
| Whitepaper section 8.1 and [NotebookLM prompt](NOTEBOOKLM_GARDEN_NASA_SAGAN_PROMPT.json), `locations` | The selected distance comparison did not establish that Boca Chica was the nearest U.S. land. Described it as a Florida Keys reference point and retained the coordinates and calculations. |
| Whitepaper section 9 | Subsections incorrectly repeated 8.1 and 8.2. Renumbered them 9.1 and 9.2. |
| NotebookLM prompt, `weather_case` and `source_instruction` | Exact solar and lunar snapshots lacked individual valid dates, retrieval timestamps, and retained source responses. Preserved the historical text while requiring matched source records before those figures may be presented as verified or current in audio. |

## Confirmed destination errors and replacements

| Original URL and observed response | Verified replacement |
|---|---|
| `https://uscode.house.gov/view.xhtml?path=/prelim@title22&edition=prelim` — HTTP 200, “Page Not Found - US Code” | [GPO Title 22, 2024 edition](https://www.govinfo.gov/content/pkg/USCODE-2024-title22/html/USCODE-2024-title22.htm) |
| `https://uscode.house.gov/view.xhtml?path=/prelim@title22/chapter56&edition=prelim` — HTTP 200, “Page Not Found - US Code” | [GPO Chapter 56, 2024 edition](https://www.govinfo.gov/content/pkg/USCODE-2024-title22/html/USCODE-2024-title22-chap56.htm) |
| `https://www.krs-one.com/about` — HTTP 404, “ConnectYourDomain Error” | [KRS-One reference biography, Wikipedia](https://en.wikipedia.org/wiki/KRS-One) |

The GPO replacements are historical editions, not proof of current statutory or litigation status. No working official KRS-One biography was established in this check, so the replacement is identified as a reference biography.

## Source and calculation verification

The 34 usable original responses include NASA POWER documentation; NASA SVS pages and hourly lunar JSON; NASA Earthdata and Kennedy material; OSU and NC State plant references; FAO-56; NOAA/NWS; NRCS Web Soil Survey; GPO statutory/history pages; the State Department lease record; USIP, AP/Spectrum and the Civil Rights Litigation Clearinghouse; Plum Village; The Planetary Society; Wikipedia's Title 22 index; and the RATM, Tom Morello and Mar-a-Lago sites. Destination/content titles were inspected. Specific findings beyond reachability are recorded here:

| Source or retained evidence | Verified finding |
|---|---|
| [Crossref: DOI 10.1094/MPMI-05-10-0116](https://api.crossref.org/works/10.1094/MPMI-05-10-0116) | Matching title; the four authors listed above; *Molecular Plant-Microbe Interactions* 23(11), November 2010, pages 1403–1412. This establishes the attribution correction even though the publisher page presented an access challenge. |
| [Crossref: DOI 10.1105/tpc.8.10.1669](https://api.crossref.org/works/10.1105/tpc.8.10.1669) | Carrington, Kasschau, Mahajan and Schaad; matching title; *The Plant Cell*, October 1996, pages 1669–1681. |
| [MIT OpenCourseWare reference](https://ocw.mit.edu/ans7870/18/18.013a/textbook/chapter28/section01.html) | Calculus textbook content explicitly relates curl flux through a surface to circulation around its boundary, supporting the checkpoint's theorem description. |
| [NASA SVS 5587](https://svs.gsfc.nasa.gov/5587/) | Page title and structured metadata confirm *Moon Phase and Libration, 2026*, published 11 December 2025. |
| [NASA hourly lunar JSON](https://svs.gsfc.nasa.gov/vis/a000000/a005500/a005587/mooninfo_2026.json) | Downloaded 8,760 hourly entries. The `17 Oct 2026 19:00 UT` record gives phase **41.8%**, age **7.132 days**, distance **404,238 km**, and diameter **1,773.0 arcseconds**, matching the [October log](GARDEN_LOG_2026-10-17_LATE_BLOOMERS.md). This does not establish the undated August prompt's lunar snapshot. |
| [NASA Earthdata citizen-science training](https://www.earthdata.nasa.gov/learn/trainings/connecting-citizen-science-remote-sensing) | Title and dated metadata confirm *Connecting Citizen Science With Remote Sensing*, 24 January 2023. |
| October log's embedded NASA POWER response | Parsed the retained JSON and recomputed precipitation **5.19 mm**, lowest valid minimum **8.74 °C**, latest meteorology **14 October**, latest solar **10 October**, and no valid PAR values. These match the narrative. This checks the summary against the retained response without independently authenticating that response with NASA. |
| Whitepaper's great-circle example | Recomputed all five kilometre distances from the stated coordinates and 6,371 km radius: **848, 854, 901, 1,111, and 2,275 km**, matching the displayed rounded values. |
| [Open Library edition record, ISBN 039453512X](https://openlibrary.org/isbn/039453512X.json) | Catalog record OL797905M lists *The Demon-Haunted World*, Random House, 1995, first edition, LCCN 95034076. This supports the whitepaper’s publisher/year pairing; no change was made. The author’s actual consulted copy and page references are not established. |
| Documentation structure | The NotebookLM prompt and retained POWER response parse as JSON. The corrected math block uses ordinary LaTeX escapes and section 9 has matching subsection numbers. |

The October log already rejects fill values and invalid wind directions, distinguishes model output from garden measurements, and avoids claiming inherited hardiness from photographs. Those boundaries were retained.

## Six access limitations

These responses do **not** establish that the underlying sources are broken or false:

| Original source | Observed limitation |
|---|---|
| [Plant-virology publisher DOI](https://doi.org/10.1094/MPMI-05-10-0116) | HTTP 403 challenge at the publisher; bibliographic identity was independently verified through Crossref. |
| [USDA growing-degree-day definition](https://ipad.fas.usda.gov/cropexplorer/Definitions/csc.htm) | HTTP 503. |
| [Missouri Botanical Garden cosmos reference](https://www.missouribotanicalgarden.org/PlantFinder/PlantFinderDetails.aspx?isprofile=0&letter=c&taxonid=277181) | HTTP 503. |
| [RATMVEVO YouTube channel](https://www.youtube.com/user/RATMVEVO) | Connection/request failure, curl exit 56; no usable HTTP response. |
| [Still Water lettuce quotation](https://www.stillwatermpc.org/dharma-topics/don_t_blame_the_lettuce/) | HTTP 403. |
| [Former Carrington PMC link](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC161306/) | HTTP 200 reCAPTCHA page rather than article content; article identity remains unverified through this URL. |

## Remaining evidence limits

- **Book editions and quotation provenance:** Verify edition-specific publisher/year for the four Sagan books and the edition of *Peace Is Every Step* actually used. The Open Library record supports the existing “Random House, 1995” pairing for *The Demon-Haunted World*; the author’s actual consulted copy and any page references remain unestablished. The *Conan* quotation and complete lettuce quotation provenance were not independently authenticated. No page numbers or substitute editions were invented.
- **Historical law and current outcomes:** Reachable GPO, USIP, AP and court-history pages do not establish a final appellate disposition or a subsequent congressional renaming. The September notes retain their explicit limits on those conclusions.
- **Claim-to-source depth:** Bibliographic identity and destination titles do not substitute for reading every cited paper and checking every scientific claim. Detailed virology claim assessment and complete dated-metadata checks remain outside this pass.
- **Original observations and weather provenance:** The August journal lists photo/screenshot filenames; unretained images and capture times were not authenticated. The October POWER response retains coordinates, values, units, interval, API version and time standard, but not its exact original request URL or retrieval timestamp. A new retrieval may return revised data and should be preserved separately. Undated August solar/lunar examples require their own source records before reuse.
