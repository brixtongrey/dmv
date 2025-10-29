--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4
\connect dmv

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';
SET default_table_access_method = heap;

--
-- Data for Name: persons; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.persons (id, first_name, last_name) FROM stdin;
1	Hattie	Klein
2	Ansel	Volkman
3	Simone	Streich
4	Hallie	Wisozk
5	Trisha	Hickle
6	Jermaine	Gleason
7	Oceane	Graham
8	Lucas	Wuckert
9	Kelly	Auer
10	Paris	Crist
11	Jamie	Stoltenberg
12	Terrence	Reichert
13	Ollie	Runte-Sauer
14	Gabriel	Jaskolski
15	Jarod	Rempel
16	Forrest	Douglas
17	Hardy	Yundt
18	Pauline	King
19	Naomie	Beier
20	Eduardo	Jacobi
21	Magnus	Schulist
22	Gail	Hodkiewicz
23	Rick	Beatty
24	Coralie	Friesen
25	Ofelia	Watsica
26	Freddy	Morissette
27	Rodolfo	Emard
28	Hal	Friesen
29	Brain	Wisoky
30	Elody	McDermott
31	Jayce	Luettgen
32	Marielle	Kuhn
33	Drake	Bahringer
34	Tad	O'Keefe
35	Tamia	VonRueden
36	Carlotta	Schultz
37	Orval	Ullrich
38	Gwen	Barton
39	Karianne	Reichel
40	Barton	Tillman
41	Adolf	Buckridge
42	Gisselle	Morar
43	Odessa	Rath
44	Abdiel	Larkin
45	Amber	Heidenreich
46	Myra	Wisozk
47	Eliane	Crona
48	Afton	McLaughlin-Kulas
49	Bradford	Oberbrunner
50	Meta	Mosciski
51	Adrianna	Mosciski
52	Yasmine	Toy
53	Olaf	Tillman
54	Mckayla	Walter
55	Dwight	Harvey
56	Monserrat	Hartmann
57	Constance	Nicolas
58	Betty	Durgan
59	Kellen	Schaefer
60	Aisha	Farrell
61	Alexzander	Grimes
62	Jackie	Kris
63	Angela	Kuhn
64	Sheridan	Crist
65	Halle	Stark
66	Taryn	Reilly
67	Joshuah	Harris
68	Nasir	Anderson
69	Arden	Moen
70	Hiram	Douglas
71	Icie	Okuneva
72	Giles	Wilderman
73	Lee	Adams
74	Wellington	Hand
75	Gladyce	Collins
76	Agustina	King
77	Shanie	Buckridge
78	Adaline	Stark
79	Lemuel	Trantow
80	Rae	Quigley
81	Emmalee	Rutherford
82	Columbus	Moore
83	Ressie	Towne
84	Shaun	Veum
85	Megane	Haley
86	Loy	Waelchi
87	Kurtis	Schmitt
88	Adriel	Jacobi
89	Catherine	Hegmann
90	Minerva	Hahn
91	Claire	Ullrich
92	Forest	Block
93	Mara	Terry-Sawayn
94	Gerald	Padberg
95	Reginald	Kassulke
96	Allison	Gibson
97	Bonita	O'Keefe
98	Candice	Franey
99	Sammy	McLaughlin
100	Cara	Sawayn
\.

--
-- Data for Name: licenses; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.licenses (id, address, eye_color, date_of_birth, person_id) FROM stdin;
1	4674 Ankunding Harbors	blue	1966-10-20	1
2	3409 Fisher Locks	purple	1985-08-22	4
3	67670 Tania Key	green	1939-10-28	7
4	6853 Reynolds Passage	maroon	1947-06-30	10
5	30113 Kirlin Manor	turquoise	1933-07-16	13
6	7560 E Broadway	lavender	1961-08-14	16
7	8296 Amiya Dale	orange	1980-01-29	19
8	3184 Damien Brooks	sky blue	1999-03-13	22
9	7109 Christiansen Extensions	lime	1914-10-16	25
10	51400 Kunze Court	cyan	1908-08-08	28
11	505 Mayer Camp	plum	1924-08-04	31
12	3338 Kuhlman Burgs	turquoise	1915-01-28	34
13	3175 Miller Creek	salmon	1966-01-28	37
14	308 Franklin Street	mint green	1977-12-13	40
15	329 Aida Gardens	sky blue	1952-06-03	43
16	76257 Alize Creek	purple	1976-12-07	46
17	2419 Anne Pines	sky blue	1957-08-01	49
18	9060 Rubye Village	indigo	1950-12-08	52
19	93960 Market Street	teal	1983-01-29	55
20	3522 E 4th Street	yellow	1999-08-30	58
21	241 Hauck Shoal	olive	1910-08-07	61
22	15529 McClure Parkway	cyan	1908-08-16	64
23	8726 Meggie Way	sky blue	1921-12-24	67
24	8220 Wyman Rapids	pink	1967-03-16	70
25	494 Bruce Knolls	orchid	1941-12-09	73
26	822 Chapel Hill	lavender	1991-11-11	76
27	976 Rogahn Pike	lavender	1956-09-23	79
28	2923 Elsie Villages	gold	1975-03-27	82
29	56737 Noemi Corner	red	1976-04-24	85
30	25377 Bridie Mill	sky blue	1936-11-23	88
31	8979 College Street	maroon	1953-10-25	91
32	452 Kassandra Alley	fuchsia	1901-07-05	94
33	83777 The Dell	gold	1995-03-17	97
34	103 Railway Street	orchid	1942-09-17	100
\.

--
-- Name: licenses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.licenses_id_seq', 34, true);


--
-- Name: persons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.persons_id_seq', 100, true);

