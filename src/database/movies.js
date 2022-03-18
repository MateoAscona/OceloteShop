const movies = [{
  "id": 1,
  "title": "Edge of the City",
  "category": "Drama",
  "year": 2008,
  "company": "Nicolas and Sons",
  "image": "https://dummyimage.com/200x200/33e229",
  "descriptionShort": "Unsp car occ injured in clsn w rail trn/veh nontraf, init",
  "descriptionLong": "Unspecified car occupant injured in collision with railway train or railway vehicle in nontraffic accident, initial encounter",
  "stock": 22
}, {
  "id": 2,
  "title": "Back from Eternity",
  "category": "Drama",
  "year": 1998,
  "company": "Davis LLC",
  "image": "https://dummyimage.com/200x200/e879ec",
  "descriptionShort": "Oth injury of vein at forearm level, unspecified arm",
  "descriptionLong": "Other specified injury of vein at forearm level, unspecified arm",
  "stock": 45
}, {
  "id": 3,
  "title": "Jiro Dreams of Sushi",
  "category": "Documentary",
  "year": 2007,
  "company": "O'Conner-Bauch",
  "image": "https://dummyimage.com/200x200/ad799d",
  "descriptionShort": "Disp fx of neck of scapula, l shldr, subs for fx w nonunion",
  "descriptionLong": "Displaced fracture of neck of scapula, left shoulder, subsequent encounter for fracture with nonunion",
  "stock": 66
}, {
  "id": 4,
  "title": "Kings of the Road (Im Lauf der Zeit)",
  "category": "Drama",
  "year": 2003,
  "company": "Sawayn, Littel and Raynor",
  "image": "https://dummyimage.com/200x200/717a6e",
  "descriptionShort": "Tox eff of carb monx fr incmpl combst dmst fuel, acc, subs",
  "descriptionLong": "Toxic effect of carbon monoxide from incomplete combustion of other domestic fuels, accidental (unintentional), subsequent encounter",
  "stock": 45
}, {
  "id": 5,
  "title": "Killing Zoe",
  "category": "Thriller",
  "year": 2008,
  "company": "Mills-Willms",
  "image": "https://dummyimage.com/200x200/3a15ed",
  "descriptionShort": "Major osseous defect, forearm",
  "descriptionLong": "Major osseous defect, forearm",
  "stock": 91
}, {
  "id": 6,
  "title": "God told Me To",
  "category": "Thriller",
  "year": 2011,
  "company": "Homenick, Roob and Gleichner",
  "image": "https://dummyimage.com/200x200/75503e",
  "descriptionShort": "Nondisp fx of body of hamate bone, unsp wrs, 7thP",
  "descriptionLong": "Nondisplaced fracture of body of hamate [unciform] bone, unspecified wrist, subsequent encounter for fracture with malunion",
  "stock": 7
}, {
  "id": 7,
  "title": "Adrift in Tokyo (Tenten)",
  "category": "Comedy",
  "year": 2007,
  "company": "Beier Group",
  "image": "https://dummyimage.com/200x200/104558",
  "descriptionShort": "Functional diarrhea",
  "descriptionLong": "Functional diarrhea",
  "stock": 5
}, {
  "id": 8,
  "title": "Steel Magnolias",
  "category": "Drama",
  "year": 2004,
  "company": "Windler, Herman and Gaylord",
  "image": "https://dummyimage.com/200x200/686d07",
  "descriptionShort": "Traum rupt of palmar ligmt of unsp finger at MCP/IP jt, init",
  "descriptionLong": "Traumatic rupture of palmar ligament of unspecified finger at metacarpophalangeal and interphalangeal joint, initial encounter",
  "stock": 12
}, {
  "id": 9,
  "title": "Men in War",
  "category": "Drama",
  "year": 1997,
  "company": "Turner, Rippin and Walker",
  "image": "https://dummyimage.com/200x200/7e84e9",
  "descriptionShort": "Unsp sprain of unspecified shoulder joint, init encntr",
  "descriptionLong": "Unspecified sprain of unspecified shoulder joint, initial encounter",
  "stock": 59
}, {
  "id": 10,
  "title": "North Star (a.k.a. Tashunga)",
  "category": "Action",
  "year": 1968,
  "company": "Kris-Huel",
  "image": "https://dummyimage.com/200x200/9617e0",
  "descriptionShort": "Disp fx of l tibial spin, 7thF",
  "descriptionLong": "Displaced fracture of left tibial spine, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing",
  "stock": 83
}, {
  "id": 11,
  "title": "State of Emergency",
  "category": "Thriller",
  "year": 1997,
  "company": "McDermott-Emmerich",
  "image": "https://dummyimage.com/200x200/bac3d5",
  "descriptionShort": "Superficial frostbite of unspecified ear, subs encntr",
  "descriptionLong": "Superficial frostbite of unspecified ear, subsequent encounter",
  "stock": 65
}, {
  "id": 12,
  "title": "The Phantom Light",
  "category": "Thriller",
  "year": 2007,
  "company": "Hirthe-Bernhard",
  "image": "https://dummyimage.com/200x200/b3f8d0",
  "descriptionShort": "Calcifcn and ossifictn of muscles assoc w burns, r forearm",
  "descriptionLong": "Calcification and ossification of muscles associated with burns, right forearm",
  "stock": 21
}, {
  "id": 13,
  "title": "Postcards From the Edge",
  "category": "Comedy",
  "year": 1992,
  "company": "Mills, Rohan and Wiza",
  "image": "https://dummyimage.com/200x200/b83977",
  "descriptionShort": "Failure in dosage in electroshock or insulin-shock therapy",
  "descriptionLong": "Failure in dosage in electroshock or insulin-shock therapy",
  "stock": 43
}, {
  "id": 14,
  "title": "Little Miss Marker",
  "category": "Comedy",
  "year": 2008,
  "company": "Nikolaus-Zieme",
  "image": "https://dummyimage.com/200x200/47e0a5",
  "descriptionShort": "Underdosing of hydantoin derivatives",
  "descriptionLong": "Underdosing of hydantoin derivatives",
  "stock": 59
}, {
  "id": 15,
  "title": "Stickup, The",
  "category": "Action",
  "year": 2007,
  "company": "Bauch LLC",
  "image": "https://dummyimage.com/200x200/045b29",
  "descriptionShort": "Shrt lst unil nerlgif hdache w cnjnct inject/tear, ntrct",
  "descriptionLong": "Short lasting unilateral neuralgiform headache with conjunctival injection and tearing (SUNCT), intractable",
  "stock": 60
}, {
  "id": 16,
  "title": "The Ghosts in Our Machine",
  "category": "Documentary",
  "year": 1993,
  "company": "Kuphal, Daniel and Mann",
  "image": "https://dummyimage.com/200x200/24ce19",
  "descriptionShort": "Third [oculomotor] nerve palsy, left eye",
  "descriptionLong": "Third [oculomotor] nerve palsy, left eye",
  "stock": 74
}, {
  "id": 17,
  "title": "Prospero's Books",
  "category": "Drama",
  "year": 2005,
  "company": "Willms-Nader",
  "image": "https://dummyimage.com/200x200/5c82c7",
  "descriptionShort": "Poisn by unsp antieplptc and sed-hypntc drugs, slf-hrm, sqla",
  "descriptionLong": "Poisoning by unspecified antiepileptic and sedative-hypnotic drugs, intentional self-harm, sequela",
  "stock": 33
}, {
  "id": 18,
  "title": "Gigli",
  "category": "Comedy",
  "year": 2004,
  "company": "Kilback-Rolfson",
  "image": "https://dummyimage.com/200x200/1ae03d",
  "descriptionShort": "Oth traum displ spondylolysis of seventh cervcal vert, init",
  "descriptionLong": "Other traumatic displaced spondylolisthesis of seventh cervical vertebra, initial encounter for closed fracture",
  "stock": 9
}, {
  "id": 19,
  "title": "Drugstore Cowboy",
  "category": "Drama",
  "year": 1999,
  "company": "Osinski, Torp and Gaylord",
  "image": "https://dummyimage.com/200x200/233571",
  "descriptionShort": "Open bite of left lesser toe(s) w damage to nail, subs",
  "descriptionLong": "Open bite of left lesser toe(s) with damage to nail, subsequent encounter",
  "stock": 9
}, {
  "id": 20,
  "title": "Metropolitan",
  "category": "Comedy",
  "year": 2001,
  "company": "Heidenreich, Littel and Gusikowski",
  "image": "https://dummyimage.com/200x200/27d0fe",
  "descriptionShort": "Unsp fx first MC bone, unsp hand, subs for fx w routn heal",
  "descriptionLong": "Unspecified fracture of first metacarpal bone, unspecified hand, subsequent encounter for fracture with routine healing",
  "stock": 4
}, {
  "id": 21,
  "title": "Chiko",
  "category": "Drama",
  "year": 1986,
  "company": "Hansen-Rowe",
  "image": "https://dummyimage.com/200x200/623d0a",
  "descriptionShort": "Disp fx of less tuberosity of r humer, 7thD",
  "descriptionLong": "Displaced fracture of lesser tuberosity of right humerus, subsequent encounter for fracture with routine healing",
  "stock": 39
}, {
  "id": 22,
  "title": "Highlander II: The Quickening",
  "category": "Action",
  "year": 1997,
  "company": "Greenfelder and Sons",
  "image": "https://dummyimage.com/200x200/4dde0b",
  "descriptionShort": "Athetoid cerebral palsy",
  "descriptionLong": "Athetoid cerebral palsy",
  "stock": 7
}, {
  "id": 23,
  "title": "Bastards (Les salauds)",
  "category": "Drama",
  "year": 2009,
  "company": "Bednar-Parisian",
  "image": "https://dummyimage.com/200x200/69123e",
  "descriptionShort": "Person outsd pk-up/van inj in clsn w pedl cyc in traf, subs",
  "descriptionLong": "Person on outside of pick-up truck or van injured in collision with pedal cycle in traffic accident, subsequent encounter",
  "stock": 93
}, {
  "id": 24,
  "title": "Avengers, The",
  "category": "Action",
  "year": 2006,
  "company": "Heathcote Inc",
  "image": "https://dummyimage.com/200x200/b8e28c",
  "descriptionShort": "Secondary noninfectious iridocyclitis, left eye",
  "descriptionLong": "Secondary noninfectious iridocyclitis, left eye",
  "stock": 36
}, {
  "id": 25,
  "title": "Wonderful and Loved by All (Underbar och älskad av alla)",
  "category": "Comedy",
  "year": 1994,
  "company": "Hammes and Sons",
  "image": "https://dummyimage.com/200x200/30d849",
  "descriptionShort": "Disloc of proximal interphaln joint of l rng fngr, sequela",
  "descriptionLong": "Dislocation of proximal interphalangeal joint of left ring finger, sequela",
  "stock": 20
}, {
  "id": 26,
  "title": "Island, The",
  "category": "Thriller",
  "year": 1999,
  "company": "Greenfelder, Kiehn and Stamm",
  "image": "https://dummyimage.com/200x200/33311e",
  "descriptionShort": "Unspecified superficial injury of unspecified thigh, sequela",
  "descriptionLong": "Unspecified superficial injury of unspecified thigh, sequela",
  "stock": 87
}, {
  "id": 27,
  "title": "Somersault",
  "category": "Drama",
  "year": 2005,
  "company": "Blanda-Jenkins",
  "image": "https://dummyimage.com/200x200/724bf2",
  "descriptionShort": "Pnctr w fb of unsp great toe w/o damage to nail, init",
  "descriptionLong": "Puncture wound with foreign body of unspecified great toe without damage to nail, initial encounter",
  "stock": 87
}, {
  "id": 28,
  "title": "Brannigan",
  "category": "Action",
  "year": 1989,
  "company": "Moore LLC",
  "image": "https://dummyimage.com/200x200/575587",
  "descriptionShort": "Monteggia's fx unsp ulna, 7thF",
  "descriptionLong": "Monteggia's fracture of unspecified ulna, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing",
  "stock": 8
}, {
  "id": 29,
  "title": "Fog City Mavericks",
  "category": "Documentary",
  "year": 2005,
  "company": "Keeling-Langworth",
  "image": "https://dummyimage.com/200x200/d9eba3",
  "descriptionShort": "Strain unsp musc/fasc/tend at thi lev, right thigh, sequela",
  "descriptionLong": "Strain of unspecified muscles, fascia and tendons at thigh level, right thigh, sequela",
  "stock": 57
}, {
  "id": 30,
  "title": "Don't Stop Believin': Everyman's Journey",
  "category": "Documentary",
  "year": 2007,
  "company": "McKenzie-Koch",
  "image": "https://dummyimage.com/200x200/237e25",
  "descriptionShort": "Burn of second degree of left axilla, subsequent encounter",
  "descriptionLong": "Burn of second degree of left axilla, subsequent encounter",
  "stock": 9
}, {
  "id": 31,
  "title": "Private School",
  "category": "Comedy",
  "year": 1999,
  "company": "Bogisich-Collins",
  "image": "https://dummyimage.com/200x200/ae28e7",
  "descriptionShort": "Abn lev drug/meds/biol subst in specimens from resp org/thrx",
  "descriptionLong": "Abnormal level of other drugs, medicaments and biological substances in specimens from respiratory organs and thorax",
  "stock": 56
}, {
  "id": 32,
  "title": "Guns of Navarone, The",
  "category": "Action",
  "year": 2010,
  "company": "Walsh-Wintheiser",
  "image": "https://dummyimage.com/200x200/74f7da",
  "descriptionShort": "Laceration with foreign body of thumb without damage to nail",
  "descriptionLong": "Laceration with foreign body of thumb without damage to nail",
  "stock": 31
}, {
  "id": 33,
  "title": "Dear Zachary: A Letter to a Son About His Father",
  "category": "Documentary",
  "year": 2005,
  "company": "Rosenbaum-Brakus",
  "image": "https://dummyimage.com/200x200/cb7fd1",
  "descriptionShort": "Inj flexor musc/fasc/tend thmb at forearm level, sequela",
  "descriptionLong": "Other injury of flexor muscle, fascia and tendon of unspecified thumb at forearm level, sequela",
  "stock": 75
}, {
  "id": 34,
  "title": "Short Film About John Bolton, A",
  "category": "Thriller",
  "year": 1996,
  "company": "Daniel, Kuphal and Vandervort",
  "image": "https://dummyimage.com/200x200/013d9a",
  "descriptionShort": "Unsp injury of radial artery at forarm lv, unsp arm, subs",
  "descriptionLong": "Unspecified injury of radial artery at forearm level, unspecified arm, subsequent encounter",
  "stock": 23
}, {
  "id": 35,
  "title": "Leaves of Grass",
  "category": "Comedy",
  "year": 1988,
  "company": "Funk-Gutmann",
  "image": "https://dummyimage.com/200x200/e46fe4",
  "descriptionShort": "Other physeal fracture of right calcaneus, 7thB",
  "descriptionLong": "Other physeal fracture of right calcaneus, initial encounter for open fracture",
  "stock": 26
}, {
  "id": 36,
  "title": "Wild About Harry",
  "category": "Comedy",
  "year": 2009,
  "company": "Bartell-Walker",
  "image": "https://dummyimage.com/200x200/53c8b6",
  "descriptionShort": "Chronic multifocal osteomyelitis, left ankle and foot",
  "descriptionLong": "Chronic multifocal osteomyelitis, left ankle and foot",
  "stock": 30
}, {
  "id": 37,
  "title": "Waiting Women (Kvinnors väntan)",
  "category": "Comedy",
  "year": 2011,
  "company": "Adams-Mitchell",
  "image": "https://dummyimage.com/200x200/d126e6",
  "descriptionShort": "Other superficial bite, unspecified lower leg, sequela",
  "descriptionLong": "Other superficial bite, unspecified lower leg, sequela",
  "stock": 92
}, {
  "id": 38,
  "title": "Kummeli V",
  "category": "Comedy",
  "year": 1996,
  "company": "Kautzer Group",
  "image": "https://dummyimage.com/200x200/8734e0",
  "descriptionShort": "Displaced comminuted fracture of shaft of humerus, right arm",
  "descriptionLong": "Displaced comminuted fracture of shaft of humerus, right arm",
  "stock": 62
}, {
  "id": 39,
  "title": "Electric Shadows (Meng ying tong nian)",
  "category": "Drama",
  "year": 2011,
  "company": "Hayes-Jacobs",
  "image": "https://dummyimage.com/200x200/bc7834",
  "descriptionShort": "Laceration with foreign body, left hip, sequela",
  "descriptionLong": "Laceration with foreign body, left hip, sequela",
  "stock": 69
}, {
  "id": 40,
  "title": "Sharon's Baby",
  "category": "Thriller",
  "year": 2011,
  "company": "Raynor LLC",
  "image": "https://dummyimage.com/200x200/a28325",
  "descriptionShort": "Adverse effect of ganglionic blocking drugs",
  "descriptionLong": "Adverse effect of ganglionic blocking drugs",
  "stock": 73
}, {
  "id": 41,
  "title": "My Sister Eileen",
  "category": "Comedy",
  "year": 2007,
  "company": "Lowe-Blanda",
  "image": "https://dummyimage.com/200x200/1f62ed",
  "descriptionShort": "Toxic effect of manganese and its compounds, undet, sequela",
  "descriptionLong": "Toxic effect of manganese and its compounds, undetermined, sequela",
  "stock": 45
}, {
  "id": 42,
  "title": "Big Trees, The",
  "category": "Action",
  "year": 1985,
  "company": "Kihn, Dickens and Cronin",
  "image": "https://dummyimage.com/200x200/19eca6",
  "descriptionShort": "Matern care for known or susp placntl insuff, 2nd tri, fts3",
  "descriptionLong": "Maternal care for known or suspected placental insufficiency, second trimester, fetus 3",
  "stock": 50
}, {
  "id": 43,
  "title": "History of the World: Part I",
  "category": "Comedy",
  "year": 1994,
  "company": "Wuckert Group",
  "image": "https://dummyimage.com/200x200/393473",
  "descriptionShort": "Subluxation and dislocation of C0/C1 cervical vertebrae",
  "descriptionLong": "Subluxation and dislocation of C0/C1 cervical vertebrae",
  "stock": 36
}, {
  "id": 44,
  "title": "Saw III",
  "category": "Thriller",
  "year": 2005,
  "company": "Parisian-Borer",
  "image": "https://dummyimage.com/200x200/69c0e7",
  "descriptionShort": "Displ bicondylar fx r tibia, 7thH",
  "descriptionLong": "Displaced bicondylar fracture of right tibia, subsequent encounter for open fracture type I or II with delayed healing",
  "stock": 43
}, {
  "id": 45,
  "title": "Made for Each Other",
  "category": "Comedy",
  "year": 2010,
  "company": "Mosciski, Stark and Kovacek",
  "image": "https://dummyimage.com/200x200/b6c6d0",
  "descriptionShort": "Injury of ulnar nerve at wrs/hnd lv of unsp arm, subs",
  "descriptionLong": "Injury of ulnar nerve at wrist and hand level of unspecified arm, subsequent encounter",
  "stock": 79
}, {
  "id": 46,
  "title": "My Favorite Martian",
  "category": "Comedy",
  "year": 1994,
  "company": "Ullrich Group",
  "image": "https://dummyimage.com/200x200/8a7dc5",
  "descriptionShort": "Other Hodgkin lymphoma, spleen",
  "descriptionLong": "Other Hodgkin lymphoma, spleen",
  "stock": 77
}, {
  "id": 47,
  "title": "O-Bi, O-Ba - The End of Civilization (O-bi, O-ba - Koniec cywilizacji)",
  "category": "Drama",
  "year": 1986,
  "company": "Kunde, Leannon and Lang",
  "image": "https://dummyimage.com/200x200/f32cee",
  "descriptionShort": "Stage 3 necrotizing enterocolitis in newborn",
  "descriptionLong": "Stage 3 necrotizing enterocolitis in newborn",
  "stock": 70
}, {
  "id": 48,
  "title": "Dragon Ball Z: Bojack Unbound (Doragon bôru Z 9: Ginga girigiri!! Butchigiri no sugoi yatsu)",
  "category": "Action",
  "year": 2002,
  "company": "Lynch-Weimann",
  "image": "https://dummyimage.com/200x200/209617",
  "descriptionShort": "Burn of unsp degree of unspecified lower leg, init encntr",
  "descriptionLong": "Burn of unspecified degree of unspecified lower leg, initial encounter",
  "stock": 40
}, {
  "id": 49,
  "title": "Driver, The",
  "category": "Action",
  "year": 2004,
  "company": "Daniel-Littel",
  "image": "https://dummyimage.com/200x200/12c346",
  "descriptionShort": "Other ossification of muscle, right forearm",
  "descriptionLong": "Other ossification of muscle, right forearm",
  "stock": 29
}, {
  "id": 50,
  "title": "King in New York, A",
  "category": "Drama",
  "year": 2004,
  "company": "Jacobi, McLaughlin and Crona",
  "image": "https://dummyimage.com/200x200/9b743f",
  "descriptionShort": "Nondisp avuls fracture (chip fracture) of right talus, init",
  "descriptionLong": "Nondisplaced avulsion fracture (chip fracture) of right talus, initial encounter for closed fracture",
  "stock": 73
}]

export default movies