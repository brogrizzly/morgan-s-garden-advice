# Weather Is What the Garden Has to Solve

## A Biological and Mathematical Method for Morgan's Garden Advice

**Status:** Methods whitepaper, version 1.0  
**Project:** Morgan's Garden Advice  
**Primary place:** Coos Bay, Oregon  
**Date:** 29 August 2026

## Abstract

Morgan's Garden Advice treats a garden as a living system embedded in a planetary system. Weather is not reduced to a forecast icon, and a photograph is not treated as a complete diagnosis. The method joins direct garden observations with local forecasts, station records, satellite/reanalysis products, solar geometry, soil properties, plant life stage, and the history of the same bed. It then performs simple, inspectable calculations that correspond to known biological processes: photosynthesis, thermal development, transpiration, evapotranspiration, soil-water storage, germination, flowering, and seed maturation.

Carl Sagan's work supplies the intellectual discipline for this approach. *Cosmos* places life inside physical systems operating across scale. *Pale Blue Dot* insists that Earth is the material context shared by every terrestrial life form. *The Demon-Haunted World* demands that claims be testable and that attractive explanations not outrun evidence. *Billions and Billions* demonstrates why orders of magnitude, units, rates, feedback, and accumulated change matter. Those books do not provide garden equations. They provide the reason Morgan must expose its evidence and calculations rather than imitate certainty.

The result is a glass-box advisory method. It does not ask, "What does the weather app say?" It asks, "What physical conditions reached this plant, how did the plant respond, what evidence supports that interpretation, and what is the smallest useful action now?"

## 1. The claim

Garden advice should be calculated from the interaction

\[
\text{Garden response} = f(\text{organism},\ \text{life stage},\ \text{weather},\ \text{soil},\ \text{microclimate},\ \text{history},\ \text{care})
\]

not from weather alone.

A calendula seed, an open cosmos flower, a sunflower bud, and a mature catnip seed head can occupy the same air temperature while facing different biological problems. The seed needs a viable moisture-temperature window. The open flower must maintain water balance and reproductive function. The bud is accumulating heat and carbon toward anthesis. The mature seed head may benefit from dry air and wind until dispersal, then lose collectable seed if rain or gusts arrive. Therefore Morgan first identifies the organism and stage, then interprets environmental data through that stage.

This method follows four rules:

1. **The plant is the subject.** Weather data describe exposure; the plant supplies response evidence.
2. **Local observation outranks distant precision.** A hand in the soil, a rain gauge, and a dated photograph may describe the bed better than a high-resolution regional model.
3. **Every number keeps its source date, unit, scale, and status.** Observation, forecast, satellite estimate, reanalysis, climatology, and derived value are not interchangeable.
4. **Uncertainty changes the advice.** Weak evidence leads to reversible observation or a small trial, not an aggressive intervention.

## 2. Sagan's role: epistemology before automation

### 2.1 *Cosmos*: nested systems and lawful continuity

Sagan presents nature as connected physical processes operating from molecular to planetary scales. For Morgan, this means a leaf cannot be understood apart from photons, air, water, temperature, carbon dioxide, gravity, microbes, and time. A satellite solar-radiation field and a flower photograph are not rival descriptions. They are observations at different scales that must be joined without confusing one for the other.

The practical consequence is a scale ladder:

\[
\text{Sun/Earth} \rightarrow \text{regional atmosphere} \rightarrow \text{coastal weather} \rightarrow \text{yard} \rightarrow \text{bed} \rightarrow \text{leaf/seed}
\]

Information becomes more biologically specific as it moves down the ladder, but often less continuously measured. Morgan uses the upper scales to establish forcing and the lower scales to establish what actually happened.

### 2.2 *Pale Blue Dot*: stewardship and planetary boundaries

*Pale Blue Dot* is not the formal name of a scientific theory. It is Sagan's evidence-grounded planetary perspective, developed around the photograph of Earth made by Voyager 1 on 14 February 1990 at Sagan's suggestion. The image reduces Earth to a tiny illuminated point seen across interplanetary distance. Sagan's argument is ethical and epistemic: every terrestrial garden, government, conflict, species, observer, and claimed boundary occupies the same small physical world. The Planetary Society preserves the connection between the Voyager image and Sagan's book, while the book itself is the primary source for the perspective (*Pale Blue Dot*).

For Morgan, the "little blue dot" idea can be stated as a stewardship axiom rather than a new theory:

\[
\text{Every local action occurs inside one finite, shared planetary system.}
\]

The garden is not outside ecology. Soil, pollinators, goats, windborne seed, water, insects, fungi, human choices, and waste are one coupled place. The pale-blue-dot perspective turns stewardship from decoration into a systems constraint: advice should protect the human's time and money while avoiding unnecessary harm to soil life, pollinators, animals, water, and the plant community.

Morgan therefore prefers low-cost, reversible interventions: observe, shelter, water only when the root zone needs it, collect mature seed, change one condition at a time, and retain untreated comparison plants when possible.

### 2.3 *The Demon-Haunted World*: distinguish mechanism from story

Gardens generate compelling stories. A full Moon precedes a bloom; goat browsing precedes new flowers; a particular solar event coincides with poor germination. These observations can generate hypotheses, but sequence is not proof of cause.

Morgan labels claims in four classes:

| Class | Meaning | Permitted language |
|---|---|---|
| Observed | Visible or measured directly in the garden | "The leaves are stippled." |
| Calculated | Derived transparently from dated inputs | "Today's GDD contribution is 6.2 degree-days." |
| Supported inference | Mechanism fits evidence, alternatives remain | "High VPD likely increased water demand." |
| Speculation | Interesting but untested locally | "Lunar timing may be worth logging." |

No amount of confident wording promotes speculation into observation. A causal claim needs a mechanism, a predicted result, comparison evidence, and repeated outcomes.

### 2.4 *Billions and Billions*: accumulation, rates, and honest scale

Plants integrate conditions through time. One cool hour may matter little; ten cool nights may delay development. A drizzle may wet foliage but add little root-zone water. Daily radiation, growing degree-days, rainfall deficit, and seed selection all accumulate.

Morgan therefore preserves both state and delta:

\[
X_{t} = X_{t-1} + \Delta X_t
\]

The equation is simple; the discipline is not. Every delta must retain units and provenance. This prevents category errors such as comparing instantaneous irradiance in watts per square metre with daily radiant energy in megajoules per square metre per day.

## 3. Biological model of the garden

### 3.1 Light: energy is not the same as usefulness

NASA defines photosynthetically active radiation (PAR) as light in the 400-700 nanometre band used to study photosynthesis and plant physiology. NASA POWER supplies surface shortwave radiation, which covers a broader spectrum. Shortwave energy is therefore a strong environmental input but not a direct measurement of photons absorbed by a particular leaf.

Morgan records:

- daylight duration and solar elevation;
- all-sky surface shortwave energy;
- clear-sky shortwave energy when available for the same date;
- cloud, shade, plant orientation, and canopy position from photographs;
- species and life stage.

Daily energy conversion is

\[
1\ \mathrm{kWh\,m^{-2}\,day^{-1}} = 3.6\ \mathrm{MJ\,m^{-2}\,day^{-1}}.
\]

Thus

\[
H_{kWh} = \frac{H_{MJ}}{3.6}.
\]

When both values refer to the same place and day, a clearness ratio may be computed:

\[
K = \frac{H_{all-sky}}{H_{clear-sky}}.
\]

Morgan does **not** divide values from different dates and call the result a cloud fraction. It also does not assume that more radiation is always better. Photosynthesis can saturate; excess radiation can raise leaf temperature and water demand; shaded leaves may receive far less than the regional grid cell.

### 3.2 Temperature: development accumulates as thermal time

Plant development often tracks accumulated temperature above a species- and stage-specific base. A transparent daily growing-degree-day estimate is

\[
GDD_d = \max\left(0, \frac{T_{max,d}+T_{min,d}}{2} - T_{base}\right).
\]

Cumulative thermal time is

\[
GDD_{1:n} = \sum_{d=1}^{n}GDD_d.
\]

The base temperature is not universal. Morgan must store it with the plant profile and cite its source. If no defensible species value exists, it reports raw temperature accumulation or a range instead of inventing precision. Upper-temperature caps can be added for species whose development no longer increases linearly above a threshold.

Thermal time helps interpret emergence, leaf production, budding, flowering, insect development, and seed maturation. It is not a complete growth model: water stress, photoperiod, nutrition, damage, and genetics can slow or redirect development at the same GDD total.

### 3.3 Humidity and transpiration: calculate atmospheric demand

Relative humidity alone is biologically ambiguous because warm air can contain more water vapour than cool air. Vapour-pressure deficit (VPD) better represents the air's drying demand.

For air temperature \(T\) in degrees Celsius, saturation vapour pressure may be estimated as

\[
e_s(T)=0.6108\exp\left(\frac{17.27T}{T+237.3}\right)\ \mathrm{kPa}.
\]

With relative humidity \(RH\) in percent,

\[
e_a = \frac{RH}{100}e_s(T)
\]

and

\[
VPD=e_s-e_a.
\]

Higher VPD generally strengthens the gradient driving water vapour from leaf to air, although stomata, boundary layers, wind, species, and soil-water supply determine the actual response. Oregon State University Extension emphasizes that the humidity difference affects water movement and transpiration. Morgan therefore combines VPD with wind, solar energy, soil moisture, and visible wilting rather than reading it alone.

### 3.4 Water: separate rainfall, demand, and storage

Rainfall is an input, not proof that roots received enough usable water. Foliage can intercept rain; compacted or dry soil can shed it; deep soil can retain water after the surface looks dry.

The standard reference-demand calculation is the FAO-56 Penman-Monteith equation:

\[
ET_0 = \frac{0.408\Delta(R_n-G)+\gamma\frac{900}{T+273}u_2(e_s-e_a)}{\Delta+\gamma(1+0.34u_2)}.
\]

Where \(ET_0\) is reference evapotranspiration in millimetres per day; \(R_n\) is net radiation; \(G\) is soil heat flux; \(T\) is mean air temperature; \(u_2\) is wind speed at two metres; \(e_s-e_a\) is VPD; \(\Delta\) is the slope of the saturation-vapour-pressure curve; and \(\gamma\) is the psychrometric constant. FAO recommends this standardized reference method.

Plant or bed demand is approximated by

\[
ET_c = K_cET_0,
\]

where \(K_c\) changes with crop structure and development. Mixed ornamental beds rarely justify a precise published crop coefficient, so Morgan may report \(ET_0\) as atmospheric reference demand and use photographs plus soil checks to interpret the bed.

A root-zone bookkeeping model is

\[
S_t = \operatorname{clip}(S_{t-1}+P_t+I_t-ET_{c,t}-R_t-D_t,\ 0,\ S_{max}),
\]

where \(S\) is stored root-zone water, \(P\) precipitation, \(I\) irrigation, \(R\) runoff, \(D\) deep drainage, and \(S_{max}\) available storage. USDA NRCS soil information and direct site observation inform texture, drainage, rooting depth, and water-holding assumptions. Unknown runoff and drainage stay unknown; they are not silently set to zero.

### 3.5 Soil and germination: the regional atmosphere is not the seedbed

Seeds respond to the microsite: actual soil temperature at sowing depth, water availability, oxygen, light or darkness requirements, dormancy, pathogens, and seed viability. Regional two-metre air temperature is only a proxy.

Morgan's germination evidence order is:

1. soil temperature measured at sowing depth;
2. moisture checked in the same microsite;
3. seed age, storage, and known dormancy requirements;
4. air-temperature history and solar exposure;
5. emergence counts from labeled sowing cohorts.

The basic emergence fraction is

\[
E = \frac{N_{emerged}}{N_{sown}},
\]

with the observation window, seed lot, treatment, and location retained. Random overseeding without a count can still produce useful narrative evidence, but it cannot yield a germination percentage.

### 3.6 Wind: mechanical load and biological exchange

Wind changes leaf boundary layers, transpiration, convective cooling, pollen movement, salt exposure near the coast, lodging risk, and seed dispersal. Forecast gusts matter differently by structure: a compact calendula flower and a tall branching cosmos do not experience the same bending moment.

Morgan does not calculate structural failure without stem geometry and material properties. It uses wind thresholds as advisory triggers:

- inspect tall or top-heavy stems before forecast gusts;
- collect fully mature loose seed before strong wind or prolonged rain;
- avoid tying every stem rigidly, which can transfer stress or prevent adaptive movement;
- distinguish offshore marine wind forecasts from the sheltered yard microclimate.

### 3.7 Plant stage changes the meaning of weather

| Stage | Dominant biological question | Useful signals |
|---|---|---|
| Seed | Can dormancy break and metabolism begin without rot? | Soil temperature, soil water, oxygen, species requirements |
| Emergence | Can the seedling reach light and maintain water balance? | Surface crust, light, temperature, VPD, slugs/herbivory |
| Vegetative | Can leaves gain carbon faster than stress removes it? | PAR/shortwave, temperature, VPD, soil water, nutrients |
| Bud/flower | Can reproductive structures open and function? | Thermal time, water balance, wind, rain, pollinator activity |
| Seed fill | Can the plant continue photosynthesis and resource transfer? | Leaf condition, water stress, temperature, damage |
| Seed dry-down | Can seed mature and be retained long enough to collect? | Rain-free window, humidity, wind, head colour/texture |
| Senescence | Is decline normal, stressful, diseased, or all three? | Age, seasonal history, lesion pattern, whole-plant distribution |

This table is the core of the advice engine: identical weather produces different actions at different stages.

## 4. The calculation pipeline

### Step 1: establish place and time

Record coordinates, local time zone, observation time, garden orientation, and named subsite. Coos Bay's coastal exposure means a few kilometres and a windbreak can materially change fog, wind, salt, and temperature.

### Step 2: retain raw evidence

Store photographs, human notes, direct measurements, and source responses without overwriting them with interpretation. Photograph metadata and user statements remain evidence even when identification is uncertain.

### Step 3: label every environmental datum

Each value receives:

```text
variable | value | unit | valid time | retrieval time | coordinates/station
source | status(observed/forecast/model/satellite/climatology) | resolution
```

NASA POWER missing value `-999` is null, never weather. A forecast valid tomorrow is not recorded as an observation today. A grid point is not called a backyard sensor.

### Step 4: normalize units

Examples:

\[
T_C=(T_F-32)\frac{5}{9}
\]

\[
v_{m/s}=0.44704v_{mph}
\]

\[
P_{mm}=25.4P_{in}
\]

\[
H_{kWh/m^2}=H_{MJ/m^2}/3.6.
\]

The report may display familiar units, but calculations use one documented unit system.

### Step 5: compute biological signals

Compute only what the available inputs support:

- thermal time when valid maximum, minimum, and base temperatures exist;
- VPD when temperature and humidity share an appropriate valid period;
- \(ET_0\) when the required meteorological variables are available or explicitly approximated;
- root-zone balance when precipitation/irrigation and defensible storage assumptions exist;
- solar ratios only from matched dates and locations;
- photoperiod and solar geometry from coordinates and date;
- emergence or flowering rates only from counted cohorts.

### Step 6: connect signal to phenotype

The photograph or direct observation tests whether the expected response is present. High calculated drying demand plus turgid leaves means the plant is presently coping. Low soil moisture plus wilting strengthens the water-stress inference. Stippled leaves without pest inspection remain nonspecific.

### Step 7: search for competing explanations

For every proposed diagnosis, Morgan asks what else could produce the pattern. Yellowing may involve senescence, nitrogen redistribution, root stress, drought, saturation, mites, disease, or light distribution. Advice should discriminate among these possibilities before treatment.

### Step 8: produce the smallest useful action

Outputs follow this order:

1. what is observed;
2. what the environment did or is forecast to do;
3. what mechanism plausibly joins them;
4. what remains uncertain;
5. the smallest safe action and what result to watch.

## 5. Confidence without false precision

Morgan does not collapse the garden into one magic score. It calculates a confidence descriptor from four visible factors:

\[
C=(L\times F\times D\times A)^{1/4},
\]

where each factor lies from 0 to 1:

- \(L\), **locality**: backyard sensor is higher than a distant grid cell;
- \(F\), **freshness**: same-hour observation is higher than a delayed product;
- \(D\), **directness**: measured soil temperature is higher than air-temperature proxy;
- \(A\), **agreement**: independent evidence and phenotype point the same way.

The geometric mean prevents one excellent dimension from completely hiding a zero in another. This is a project heuristic, not a validated biological law. Its components must be shown beside the result, and decisions must remain understandable without it.

Recommended language bands are:

| Confidence | Output behaviour |
|---|---|
| High | Give a specific, bounded action and monitoring interval |
| Moderate | Give a reversible action and name the main alternative |
| Low | Recommend observation, measurement, or a small controlled trial |

## 6. Moon, tides, and solar activity: log widely, claim narrowly

The Moon has established physical relationships to illumination and tides. NASA can calculate lunar phase, apparent diameter, libration, and eclipse geometry; NOAA predicts tides from astronomical forcing plus local harmonic relationships. These are legitimate environmental context.

Morgan does not infer that lunar phase directly caused germination, flowering, or plant health from coincidence. A lunar-gardening hypothesis would require repeated sowing cohorts, randomized or alternating treatments, recorded soil conditions, sufficient sample size, and a predeclared outcome. Until then, lunar phase remains a timestamped covariate and a source of night illumination, not a hidden causal switch.

Space weather is handled the same way. Solar wind, Kp, and radio flux may be logged as planetary context, but ordinary garden advice does not claim a direct plant effect without a plausible exposure pathway and supporting evidence. This is Sagan's skeptical discipline applied to curiosity: preserve the question without manufacturing the answer.

## 7. Coos Bay as a biological case

Coos Bay combines mild marine temperatures, high humidity, frequent cloud or fog, strong seasonal rain, coastal wind, and pronounced microsite variation. These conditions make several errors especially likely:

- interpreting humid air as adequate soil water;
- interpreting a wet surface as a wet root zone;
- using airport or marine wind as the exact yard wind;
- treating cool air as proof that sun-facing leaves cannot heat;
- comparing NASA products with different latency as if they were simultaneous;
- diagnosing late-season seed-producing foliage as diseased from colour alone.

On 29 August 2026, the garden photographs showed fresh flowers, buds, senescing heads, and mature seed structures together. That coexistence is biologically more informative than a single weather value: the bed contains multiple stages and therefore multiple weather responses. Forecast drying and wind favour mature-seed collection; approaching rain raises loss and mould risk for already dry heads; green heads still need attachment time. The correct advice is selective, not a whole-bed command.

## 8. A geographic teaching transect: Coos Bay to Guantanamo, Florida, and NASA

The 29 August 2026 garden conversation produced a deliberately unusual comparison: begin with the photographed flower bed in Coos Bay, read NASA and NOAA environmental data for the Florida Keys, then measure the public geography from Naval Station Guantanamo Bay to ordinary U.S. soil, Mar-a-Lago, Kennedy Space Center, and Johnson Space Center. The comparison is useful because it forces the method to preserve scale, sovereignty, coordinates, units, and biological relevance.

### 8.1 Reproducible reference points

These coordinates are public, approximate reference points used for education rather than property, navigation, or operational analysis:

| Place | Reference coordinates | Role in the comparison |
|---|---:|---|
| Coos Bay garden region, Oregon | 43.37 N, 124.22 W | Cool, humid northeastern Pacific garden and field-observation origin |
| Boca Chica Key, Florida | 24.575 N, 81.689 W | Nearest ordinary sovereign U.S. land comparison used in the Florida Keys |
| Key West, Florida | 24.5551 N, 81.7800 W | Southernmost-city weather, tide, and NASA POWER reference |
| Naval Station Guantanamo Bay | 19.9175 N, 75.1600 W | Public geographic origin for the Caribbean distance exercise |
| Mar-a-Lago, Palm Beach | 26.6771 N, 80.0367 W | Publicly addressed coastal Florida comparison point |
| Kennedy Space Center | 28.6000 N, 80.6000 W | NASA launch, conservation, plant-research, and STEM reference |
| Johnson Space Center | 29.5580 N, 95.0900 W | NASA human-spaceflight and astronaut Earth-observation reference |

The Guantanamo base is operated by the United States under a lease while ultimate sovereignty remains Cuban. Therefore the distance exercise does not label the base itself "American soil." Boca Chica Key and Key West are the Florida reference points.

### 8.2 Great-circle calculation

Straight-line surface distance is calculated with the haversine formula. For latitudes \(\phi_1,\phi_2\), longitudes \(\lambda_1,\lambda_2\), and mean Earth radius \(R=6,371\ \mathrm{km}\):

\[
\Delta\phi=\phi_2-\phi_1,\qquad \Delta\lambda=\lambda_2-\lambda_1
\]

\[
a=\sin^2\left(\frac{\Delta\phi}{2}\right)+\cos(\phi_1)\cos(\phi_2)\sin^2\left(\frac{\Delta\lambda}{2}\right)
\]

\[
c=2\arcsin(\sqrt{a}),\qquad d=Rc.
\]

Angles are converted to radians before evaluation. Unit conversions are

\[
d_{mi}=0.621371d_{km},\qquad d_{nmi}=0.539957d_{km}.
\]

Using Naval Station Guantanamo Bay as the origin gives:

| Destination | Kilometres | Statute miles | Nautical miles |
|---|---:|---:|---:|
| Boca Chica Key | 848 | 527 | 458 |
| Key West | 854 | 531 | 461 |
| Mar-a-Lago | 901 | 560 | 487 |
| Kennedy Space Center | 1,111 | 691 | 600 |
| Johnson Space Center | 2,275 | 1,414 | 1,229 |

These are modelled surface distances between reference points, not road, flight, ship, jurisdictional-boundary, or travel distances. Mar-a-Lago is only about 29 straight-line miles farther from the Guantanamo reference point than Key West; Kennedy is approximately 600 nautical miles away. The point of those results is mathematical legibility, not political symbolism.

### 8.3 The biological gradient

The transect connects two coastal garden climates and two NASA centres through a Caribbean comparison region:

- **Coos Bay** supplies cool marine air, high humidity, seasonal rain, fog, and garden-scale photographs of flowers, seed heads, soil, animals, and wind exposure.
- **The Florida Keys** supply high solar elevation, warm nights, high humidity, tropical marine weather, coral/ocean heat context, tides, and a strong contrast in daily surface radiation.
- **Guantanamo Bay** supplies a Caribbean land-ocean comparison point southeast of the Keys. Public Earth-observation products can compare solar energy, vegetation, rainfall, heat, coastal water, and land-cover patterns without examining base operations.
- **Palm Beach/Mar-a-Lago** supplies an Atlantic barrier-island and developed-coast comparison between the Keys and Kennedy.
- **Kennedy Space Center** is both a spaceport and an ecologically managed coastal landscape where NASA already joins STEM engagement, conservation, sustainability, and crop/food-production research.
- **Johnson Space Center** connects the transect to astronaut Earth photography and the Earth Science and Remote Sensing Unit, which combines human observation with satellite science.

This is Sagan's scale ladder made teachable: one flower bed can lead outward to coastal climate, ocean colour, satellites, a spherical-Earth distance calculation, astronaut observation, and back again to a seed in soil.

### 8.4 Educational opportunities NASA could explore

These are educational concepts, not claims of NASA partnership, proposed missions, or operational studies.

#### A. One protocol, different coasts

Students or citizen scientists could make the same dated observations in Coos Bay, Key West, the public communities around Guantanamo Bay, Palm Beach, and the Kennedy region: cloud type, land cover, soil-surface condition, plant stage, flowering, seed maturity, and local temperature. NASA POWER and Earthdata would provide common regional variables. The lesson is how one measurement protocol behaves across latitude and climate.

#### B. Ground truth versus pixel truth

NASA notes that GLOBE Observer land-cover observations can describe ground detail more frequently and specifically than satellite data alone. A Morgan garden photograph can be used to teach why a satellite pixel, weather station, and leaf are three different measurement supports. Students would compare field photographs with satellite overpass time, cloud observations, land-cover products, and product resolution.

#### C. Coastal land-water coupling

NASA ARSET already teaches remote sensing of coastal ecosystems and the combination of in situ measurements with satellite water-quality data. An educational module could compare Coos Bay estuarine/coastal conditions with the Florida Keys and the Caribbean around Guantanamo Bay using public sea-surface temperature, chlorophyll or ocean colour, rainfall, land cover, and shoreline observations. The biological question is how ocean and atmosphere shape nearby terrestrial plant water and heat environments.

#### D. A transparent solar-energy experiment

Students could retrieve daily all-sky shortwave energy for Coos Bay and Key West, convert megajoules to kilowatt-hours, check product latency, and compare the regional values with same-day cloud and plant photographs. They would be required to reject NASA fill values and prohibited from dividing measurements from mismatched dates. The exercise teaches units, missing data, and why regional radiant energy is not the same as leaf-level PAR.

#### E. Thermal time and phenology across latitude

Using the same species or carefully documented species-specific base temperatures, participants could accumulate GDD and record emergence, bud, flower, and mature-seed dates. The experiment would test where a simple heat model works and where photoperiod, water, genetics, or stress break it. Coos Bay and the Keys would provide a strong contrast in night temperature and solar geometry.

#### F. Astronaut photograph to backyard photograph

Johnson Space Center's Earth Science and Remote Sensing Unit supports astronaut photography from the International Space Station, and NASA describes astronaut photographs as data that can be combined with satellite imagery. A lesson could pair an astronaut-scale coastal image with satellite products, a city-scale map, and a ground photograph from a garden. Students would identify what becomes visible or invisible at every scale.

#### G. Kennedy: rockets, ecology, and food plants in one place

Kennedy's STEM and environmental programs already teach that a launch centre is also a living coastal system, while NASA's exploration-research pages document crop food-production work. A Morgan module could connect terrestrial seed selection, controlled plant growth, and coastal stewardship without claiming that a backyard bed is a spacecraft crop experiment. The common lesson is that plant advice always depends on atmosphere, light, water, substrate, boundaries, and human goals.

#### H. Geography, civic literacy, and restraint

The Guantanamo-to-Florida calculation can teach great-circle geometry and the distinction among control, jurisdiction, lease, sovereignty, and physical distance. Environmental study should use public civilian Earth data and public geography. Students should learn that the ability to measure a place does not remove ethical, legal, cultural, or historical context.

#### I. Space Cadet graduation: the joke that tests the lesson

The same material also supports an intentionally ridiculous graduation exercise. It must remain labeled **satire**, not attributed to NASA, the United States government, Donald Trump, or any real educational program:

> "The first class of Space Cadets, educated by flowers, satellites, spherical geometry, and one deeply complicated Caribbean lease."

And the fictional podium version:

> "The finest Space Cadets anywhere graduated from Guantanamo Bay. Tremendous spherical geometry. Nobody calculates Florida better."

The joke works because the students must understand the facts before they can recognize the absurdity. Guantanamo Bay is in Cuba; Cuba retains ultimate sovereignty while the United States exercises jurisdiction and control under the lease. Kennedy and Johnson are different NASA centres with different roles. A great-circle distance is not a travel route. A flower photograph is not satellite data. NASA has genuine educational and Earth-observation programs, but no such "Guantanamo Space Cadet" program is claimed here.

This sidebar is also a Sagan-style critical-thinking test. The comic claim should be decomposed into checkable parts: Who actually said it? Does the named institution exist? What does "graduated from" mean? Which geographic and legal claims are implied? What evidence could disprove the story? Humour becomes a memory device for source checking rather than a substitute for it.

### 8.5 Minimum educational dataset

```text
site_id, latitude, longitude, local_time, UTC_time
photo_id, plant_taxon, life_stage, observed_traits
air_temperature, relative_humidity, wind, precipitation
soil_temperature_depth, soil_moisture_method
shortwave_energy, PAR_if_measured, daylight_duration
source_name, source_status, valid_time, retrieval_time, resolution
observer_note, uncertainty, next_observation
```

This dataset makes the learning opportunity reproducible while keeping the organism, observer, and uncertainty visible.

## 9. Validation protocol

Morgan's advice improves through local evidence rather than rhetorical confidence.

### 8.1 Minimum garden experiment

For a question such as cold-soil calendula germination:

1. use one seed lot;
2. count equal cohorts;
3. assign labeled microsites or treatments;
4. measure soil temperature at sowing depth;
5. record moisture consistently;
6. photograph on a fixed cadence;
7. predefine emergence and survival windows;
8. retain failures and missing data;
9. repeat across more than one sowing period.

### 8.2 Calibration targets

Over time, compare predictions with outcomes:

- forecast rain versus local gauge rain;
- forecast wind versus observed lodging or anemometer readings;
- calculated GDD versus first emergence, bud, flower, and mature seed;
- calculated VPD/ET demand versus soil moisture and wilting;
- recommended action versus untreated comparison where ethical and practical.

The purpose is not to force the garden into a universal model. It is to learn which measurements are useful in this garden and where the model fails.

## 10. Software contract for Morgan's Garden Advice

The software should expose the chain

```text
source -> raw value -> unit/date/location -> derived biology signal
       -> photographed plant response -> uncertainty -> bounded advice
```

It should never:

- hide source latency;
- convert missing data into zero;
- combine unmatched dates without a warning;
- call model data a backyard measurement;
- infer disease from colour alone;
- treat Moon or space-weather correlation as plant causation;
- prescribe fertilizer, pesticide, or irrigation without stating evidence and risk;
- erase the human's observations when they conflict with the model.

The human remains the local sensor, steward, and final authority. Morgan's role is to make relationships visible and calculations inspectable.

## Conclusion

Weather calculation for a garden is not meteorology pasted beside a flower photograph. It is translation across scale: photons become leaf energy; temperature becomes thermal time; humidity and wind become drying demand; rain and soil become root-zone water; accumulated conditions become emergence, bloom, seed, or senescence. The advice is credible only when that translation is explicit.

Sagan's contribution is the governing posture. Look at the whole planet without losing the small living thing. Use numbers to clarify scale. Welcome a compelling hypothesis, then try to disprove it. Admit what is not known. Treat stewardship as a consequence of belonging to the same system one is trying to understand.

For Morgan's Garden Advice, the plants are the story. The math explains part of what reached them. The photographs show part of what they did with it. The human supplies continuity, judgment, and care.

## Works Cited

Allen, Richard G., et al. *Crop Evapotranspiration: Guidelines for Computing Crop Water Requirements*. FAO Irrigation and Drainage Paper 56, Food and Agriculture Organization of the United Nations, 1998, [www.fao.org/4/x0490e/x0490e00.htm](https://www.fao.org/4/x0490e/x0490e00.htm). Accessed 29 Aug. 2026.

The Mar-a-Lago Club. "The Mar-a-Lago Club." *The Mar-a-Lago Club*, [www.maralagoclub.com/](https://www.maralagoclub.com/). Accessed 29 Aug. 2026.

National Aeronautics and Space Administration. "Astronaut Photography: Observing the Earth from the International Space Station." *NASA Science*, 20 Feb. 2001, [science.nasa.gov/earth/earth-observatory/astronaut-photography-observing-the-earth-from-the-international-space-station/](https://science.nasa.gov/earth/earth-observatory/astronaut-photography-observing-the-earth-from-the-international-space-station/). Accessed 29 Aug. 2026.

---. "Connecting Citizen Science with Remote Sensing." *NASA Earthdata*, 24 Jan. 2023, [www.earthdata.nasa.gov/learn/trainings/connecting-citizen-science-remote-sensing](https://www.earthdata.nasa.gov/learn/trainings/connecting-citizen-science-remote-sensing). Accessed 29 Aug. 2026.

---. "Daily API." *NASA POWER*, [power.larc.nasa.gov/docs/services/api/temporal/daily/](https://power.larc.nasa.gov/docs/services/api/temporal/daily/). Accessed 29 Aug. 2026.

---. "Moon Phase and Libration, 2026." *Scientific Visualization Studio*, 11 Dec. 2025, [svs.gsfc.nasa.gov/5587/](https://svs.gsfc.nasa.gov/5587/). Accessed 29 Aug. 2026.

---. "Parameter Dictionary." *NASA POWER*, 9 July 2026, [power.larc.nasa.gov/docs/tutorials/parameters/](https://power.larc.nasa.gov/docs/tutorials/parameters/). Accessed 29 Aug. 2026.

---. "Photosynthetically Active Radiation." *NASA Earthdata*, [www.earthdata.nasa.gov/topics/biosphere/photosynthetically-active-radiation](https://www.earthdata.nasa.gov/topics/biosphere/photosynthetically-active-radiation). Accessed 29 Aug. 2026.

---. "Remote Sensing of Coastal Ecosystems." *NASA Earthdata*, 25 Aug. 2020, updated 11 Feb. 2026, [www.earthdata.nasa.gov/learn/trainings/remote-sensing-coastal-ecosystems](https://www.earthdata.nasa.gov/learn/trainings/remote-sensing-coastal-ecosystems). Accessed 29 Aug. 2026.

---. "STEM Engagement at Kennedy Space Center." *NASA*, [www.nasa.gov/kennedy/stem-engagement-at-kennedy-space-center/](https://www.nasa.gov/kennedy/stem-engagement-at-kennedy-space-center/). Accessed 29 Aug. 2026.

---. "Why Observe? Land Cover." *Scientific Visualization Studio*, 2 Dec. 2019, [svs.gsfc.nasa.gov/13286/](https://svs.gsfc.nasa.gov/13286/). Accessed 29 Aug. 2026.

National Oceanic and Atmospheric Administration. "U.S. Climate Normals." *National Centers for Environmental Information*, [www.ncei.noaa.gov/products/land-based-station/us-climate-normals](https://www.ncei.noaa.gov/products/land-based-station/us-climate-normals). Accessed 29 Aug. 2026.

---. "Weather Forecast Office API." *National Weather Service*, [www.weather.gov/documentation/services-web-api](https://www.weather.gov/documentation/services-web-api). Accessed 29 Aug. 2026.

Oregon State University Extension Service. "Environmental Factors Affecting Plant Growth." *OSU Extension Service*, [extension.oregonstate.edu/catalog/em-9903-environmental-factors-affecting-plant-growth](https://extension.oregonstate.edu/catalog/em-9903-environmental-factors-affecting-plant-growth). Accessed 29 Aug. 2026.

---. "Irrigation Water Scheduling." *OSU Extension Service*, 2026, [extension.oregonstate.edu/catalog/em-9717-irrigation-water-scheduling](https://extension.oregonstate.edu/catalog/em-9717-irrigation-water-scheduling). Accessed 29 Aug. 2026.

The Planetary Society. "A Pale Blue Dot." *The Planetary Society*, [www.planetary.org/worlds/pale-blue-dot](https://www.planetary.org/worlds/pale-blue-dot). Accessed 29 Aug. 2026.

Sagan, Carl. *Billions and Billions: Thoughts on Life and Death at the Brink of the Millennium*. Random House, 1997.

---. *Cosmos*. Random House, 1980.

---. *The Demon-Haunted World: Science as a Candle in the Dark*. Random House, 1995.

---. *Pale Blue Dot: A Vision of the Human Future in Space*. Random House, 1994.

United States Department of Agriculture. "Growing Degree Days." *Crop Explorer*, Foreign Agricultural Service, [ipad.fas.usda.gov/cropexplorer/Definitions/csc.htm](https://ipad.fas.usda.gov/cropexplorer/Definitions/csc.htm). Accessed 29 Aug. 2026.

United States Department of Agriculture, Natural Resources Conservation Service. *Web Soil Survey*, [websoilsurvey.nrcs.usda.gov/](https://websoilsurvey.nrcs.usda.gov/). Accessed 29 Aug. 2026.

United States Department of State, Office of the Historian. "Agreement between the United States of America and the Republic of Cuba for the Lease of Lands in Cuba for Coaling and Naval Stations." *Foreign Relations of the United States, 1903*, document 331, [history.state.gov/historicaldocuments/frus1903/d331](https://history.state.gov/historicaldocuments/frus1903/d331). Accessed 29 Aug. 2026.
