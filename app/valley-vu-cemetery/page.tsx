'use client'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Page() {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
	const [showScroll, setShowScroll] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setShowScroll(window.scrollY > 300)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	return (
		<div className="relative">
			<Card>
				<CardHeader>
					<h1 className="text-center">Valley Vu Cemetery</h1>
				</CardHeader>

				<CardDescription className="text-xs p-2 text-center bg-red-200">
					We are in the process of migrating this site to a new server. Some
					elements may be unavailable until that has completed. Check back in a
					couple of weeks to browse the full site again. If you need anything in
					the meantime, please contact Cameron.
				</CardDescription>
				<CardContent>
					<p>
						For my Eagle Scout project back in 2005 I complied a history of the
						residents of this cemetery. My mom, Darlene, had been collecting
						clippings and histories for years. I decided to help her put them in
						a book. I&apos;ve had many requests for this book and for updates.
						So I&apos;ve decided to put them on here in an easy to peruse format
						to save on time and money. If you have any additional information on
						any of these people, I&apos;d love to add it. Please contact us with
						whatever you have!
					</p>
					<div className="flex flex-wrap justify-center gap-2 py-4">
						{alphabet.map((letter) => (
							<a
								key={letter}
								href={`#${letter}`}
								className="text-blue-600 hover:underline"
							>
								{letter}
							</a>
						))}
					</div>
					<h2>Alphabetical</h2>
					<div id="A" className="text-xl font-bold">
						- A -
					</div>
					<p>Abercrombie, Baby</p>
					<p>Abercrombie, Mack</p>
					<p>Abercrombie, Margaret T</p>
					<p>Allphin, Ada Marie</p>
					<p>Allphin, Donald Roy</p>
					<p>Allphin, Donald William</p>
					<p>Allphin, JE</p>
					<p>Allphin, Marie Coursi</p>
					<p>Allphin, Melva Mae</p>
					<p>Allphin, Roberta</p>
					<p>Allphin, Samuel A</p>
					<p>Allphin, Samuel Tayler</p>
					<p>Allphin, William O</p>
					<p>Angus, Nathan Paul</p>
					<p>Asher, Dale Glen</p>
					<p>Asher, Marianna Moultrie</p>
					<div id="B" className="text-xl font-bold">
						- B -
					</div>

					<p>Bailey, Berniece Shaw</p>
					<p>Bailey, Wendell Junior</p>
					<p>Bankhead, Gerald Brenchley</p>
					<p>Bankhead, Janet Humphreys</p>
					<p>Bankhead, Rachel Ann</p>
					<p>Barlow, Elizabeth Christena Hansen</p>
					<p>Barlow, Inez Pearl Smith</p>
					<p>Barlow, Joseph Smith</p>
					<p>Barlow, Joseph Smith</p>
					<p>Barlow, Shirley H</p>
					<p>Barrett, Clarence Ernest</p>
					<p>Barrett, Ernest Lee</p>
					<p>Barrett, Joseph William</p>
					<p>Barrett, Lorin Edward</p>
					<p>Barrett, Lucille Kempton</p>
					<p>Barrett, Mary Luana Meacham</p>
					<p>Barrett, Nina Rosina Litson</p>
					<p>Barrett, Patrick Joseph</p>
					<p>Barrett, Perry Lorin</p>
					<p>Barrett, Shirley Richard</p>
					<p>Barrett, Steven Kendall</p>
					<p>Barrett, Velda Hutchison</p>
					<p>Barrett, William Marshall</p>
					<p>Baxter, Maurine Humphries</p>
					<p>Baxter, William Gene</p>
					<p>Beecher, Mandy Lee Slagel</p>
					<p>Bennett, James Lay</p>
					<p>Berrier, Kendra Paige</p>
					<p>Beyler, Clara Vee Wight</p>
					<p>Beyler, Gladys Ellen Nelson</p>
					<p>Beyler, Grant Nelson</p>
					<p>Beyler, Leo William</p>
					<p>Beyler, Michael Denton</p>
					<p>Bodily, Baby</p>
					<p>Bodily, Joshua James</p>
					<p>Booth, Boyd Roy</p>
					<p>Booth, Collin M</p>
					<p>Booth, Dolores Bronson</p>
					<p>Booth, LaVaughn Jones</p>
					<p>Booth, Marlin Henderson</p>
					<p>Booth, Norma Maurine Jensen Teeter</p>
					<p>Booth, Royce</p>
					<p>Branch, Stelan Ryan</p>
					<p>Briggs, MarJean Johnson</p>
					<p>Briggs, Wallace Orval</p>
					<p>Brinkman, Donald D</p>
					<p>Brinkman, Nola W</p>
					<p>Buckway, John</p>
					<div id="C" className="text-xl font-bold">
						- C -
					</div>

					<p>Caldwell, Abraham V</p>
					<p>Camacho, Angela Booth</p>
					<p>Carnahan, Leola Pearl Putnam</p>
					<p>Carnahan, Marion Charles</p>
					<p>Chapman, Thel Raymond</p>
					<p>Cole, Dorothy Estell Barrett</p>
					<p>Collins, Bertha (Bert) Lee Gullett</p>
					<p>Condit, Albert</p>
					<p>Condit, Arthur A</p>
					<p>Condit, Cecil</p>
					<p>Condit, Hyrum</p>
					<p>Condit, Leonard Merry</p>
					<p>Condit, Mary Camelia</p>
					<p>Cooper, Lucy Hepworth</p>
					<p>Cooper, Samuel T</p>
					<p>Corsi, Clarence “Swede”</p>
					<p>Corsi, Mennie Miller</p>
					<p>Cortez, Jason Kent</p>
					<p>Cottle, Albert Jay</p>
					<p>Cottle, Albert Joseph</p>
					<p>Cottle, Ethel Lorene Hall</p>
					<p>Coursi/Corsi, Renaldo/Nalder</p>
					<p>Crawford, Janica Tai</p>
					<div id="D" className="text-xl font-bold">
						- D -
					</div>

					<p>Dare, Douglas Byron</p>
					<p>Dixon, Thearen Lang</p>
					<p>Dorman, Emma A.</p>
					<p>Durfee, Mark Junior</p>
					<div id="E" className="text-xl font-bold">
						- E -
					</div>

					<p>Elison, Bryan Lynn</p>
					<p>Elison, Elmo (Doc)</p>
					<p>Elison, Gar Thayne</p>
					<p>Elison, John Alfred</p>
					<p>Elison, Lano Adams</p>
					<p>Elison, Lois Pauline Zollinger</p>
					<p>Elison, Louise Martin</p>
					<p>Elison, Mary Emily Adams</p>
					<p>Elison, Myrle Henrietta Janson</p>
					<p>Elison, Robert Leroy</p>

					<div id="F" className="text-xl font-bold">
						- F -
					</div>

					<p>Fonnesbeck, David O</p>
					<p>Fonnesbeck, Orlando Madere</p>
					<p>Fowler, Penny Marie</p>
					<p>Fowles, David Earl</p>
					<p>Fowles, Gary Earl</p>
					<p>Fowles, Karen Holtman</p>
					<p>Fridal, Sidney Buehler</p>
					<div id="G" className="text-xl font-bold">
						- G -
					</div>

					<p>Gagon, Beth Harper</p>
					<p>Gagon, Edwin Bruce</p>
					<p>Gagon, Randall Mark</p>
					<p>Galliher, Foy R</p>
					<p>Galliher, Vernice Rose</p>
					<p>Galliher, Violet</p>
					<p>Gardiner, Barbara Ehlers</p>
					<p>Gardiner, Fredrick</p>
					<p>Gardiner, Hope Hulet</p>
					<p>Gardiner, Mary</p>
					<p>Gardiner, Robert Hulet</p>
					<p>Gardiner, Sarah</p>
					<p>Garrett, Marvin Bryan</p>
					<p>Garrett, Okla Elison</p>
					<p>Goff, Brent Gneiting</p>
					<p>Goff, Cathy Gardiner</p>
					<p>Goodman, Bert E</p>
					<p>Gunnell, Francis Poppleton</p>
					<p>Gunnell, Francis Steven</p>
					<p>Gunnell, Ona Nye</p>
					<p>Gunnell, Steffany</p>
					<div id="H" className="text-xl font-bold">
						- H -
					</div>

					<p>Hall, Alice Abigail Ottley</p>
					<p>Hall, Alonzo</p>
					<p>Hall, Charlotte Morris</p>
					<p>Hall, Estella Pauline Neddo</p>
					<p>Hall, Helen</p>
					<p>Hall, Ira Kimball Sr</p>
					<p>Hall, J Deward</p>
					<p>Hall, Leonard E</p>
					<p>Hall, Leonard Parley</p>
					<p>Hall, Marcia Ann Livingston</p>
					<p>Hall, Pearl Adeline Zollinger</p>
					<p>Hall, Rodney Neddo</p>
					<p>Ham, Francis Ernest</p>
					<p>Ham, Rachel Elison</p>
					<p>Hanchir, Germaine Beaufays</p>
					<p>Harper, Blaine Thomas</p>
					<p>Harper, Douglas R</p>
					<p>Harper, Marian Frost</p>
					<p>Harper, Rawlins J</p>
					<p>Harper, Sarah Wolsey</p>
					<p>Harper, Thera Elison</p>
					<p>Harris, Kolten Kurt</p>
					<p>Hartshorn, Edna Mae Barrett</p>
					<p>Henrie, Tyler G</p>
					<p>Hepworth, Alice Ashcroft</p>
					<p>Hepworth, John W</p>
					<p>Hepworth, Leona</p>
					<p>Hepworth, Mahala Parker</p>
					<p>Hill, Celia Faye Dance</p>
					<p>Hill, Gladys R Gierisch</p>
					<p>Hill, JoAnn Smith</p>
					<p>Hill, Merlin Georald</p>
					<p>Hill, Walter Rulon</p>
					<p>Hill, Wiliam Kay</p>
					<p>Hitt, Emma G</p>
					<p>Hitt, Fern Lloyd</p>
					<p>Hitt, Grant B</p>
					<p>Hitt, Grover G</p>
					<p>Hitt, James B</p>
					<p>Hitt, James Robert</p>
					<p>Hitt, James Russell</p>
					<p>Hitt, Jane Lavinna Ann Parke</p>
					<p>Hitt, Joel W</p>
					<p>Hitt, John Charles</p>
					<p>Hitt, Kenneth Russel</p>
					<p>Hitt, Martha Jameson</p>
					<p>Hitt, Martha Jane (Jennie) Hutchison</p>
					<p>Hitt, Russell Vaun</p>
					<p>Hitt, Shirley (Shirl) Brown</p>
					<p>Hitt, William “Bill” Wendal</p>
					<p>Hodges, Teddy Merland Jr</p>
					<p>Hodges, Teddy Merland Sr</p>
					<p>Hodges, Viola Valene Beebe</p>
					<p>Hoffman-Smith, Jasmine Mae</p>
					<p>Holtman, Edward John Jr</p>
					<p>Holtman, Edward Kent</p>
					<p>Holtman, Renee Eames Smyer</p>
					<p>Holtman, Reta Oman</p>
					<p>Holtman, Sarah Rochelle Thompson</p>
					<p>Hoopes, Margaret Ann Howard</p>
					<p>Hunt, Albert C</p>
					<p>Hutchison, Anna Margaret</p>
					<p>Hutchison, Baby</p>
					<p>Hutchison, Bert Nish</p>
					<p>Hutchison, Clifford Odell (Tinker)</p>
					<p>Hutchison, David</p>
					<p>Hutchison, David O</p>
					<p>Hutchison, David Wheeler</p>
					<p>Hutchison, Duane (Hutch)</p>
					<p>Hutchison, Edward Udell (Tony)</p>
					<p>Hutchison, Estell Ransom</p>
					<p>Hutchison, Garrett</p>
					<p>Hutchison, Harold Eckle</p>
					<p>Hutchison, J D</p>
					<p>Hutchison, James Walton</p>
					<p>Hutchison, JaNeal Jardine</p>
					<p>Hutchison, Jeremy David</p>
					<p>Hutchison, Jerri</p>
					<p>Hutchison, Lester L (Bill)</p>
					<p>Hutchison, Lula Gay</p>
					<p>Hutchison, MacKenzy Jared</p>
					<p>Hutchison, Martha Jane Lloyd</p>
					<p>Hutchison, Michael Edward</p>
					<p>Hutchison, Myrtle Winchester</p>
					<p>Hutchison, Nelda June Ward</p>
					<p>Hutchison, Pearl O Smith Powers</p>
					<p>Hutchison, Richard Dean</p>
					<p>Hutchison, Robert James</p>
					<p>Hutchison, Robert Nish</p>
					<p>Hutchison, Robert Nish (Bert)</p>
					<p>Hutchison, Rowena Jane</p>
					<p>Hutchison, Shea Lynn</p>
					<p>Hutchison, Sylvester (Ves)</p>
					<p>Hutchison, Thomas Robert</p>
					<p>Hutchison, Wanda L</p>
					<p>Hutchison, Winston Jared (Boots)</p>
					<div id="I" className="text-xl font-bold">
						- I -
					</div>

					<p>Israelsen, Jeb Spencer</p>

					<div id="J" className="text-xl font-bold">
						- J -
					</div>

					<p>Jacobs, Dorothy Evelyn Pellin</p>
					<p>Jacobs, Sarah Margaret Hitt</p>
					<p>Jacobs, Swen Howard</p>
					<p>Jacobs, Sidney Monta Lt Col</p>
					<p>Jardine, Ivy Hadfield Paskett</p>
					<p>Jardine, Lawrence Badger</p>
					<p>Jardine, William Glen</p>
					<p>Jensen, David Leonard</p>
					<p>Jensen, Fern Durfee</p>
					<p>Jensen, Fern Lydia</p>
					<p>Jensen, Lawrence D</p>
					<p>Jones, Gary Ross</p>
					<p>Jones, Glenn Leroy</p>
					<p>Jones, Harold Aaron</p>
					<p>Jones, Hazel Robbins</p>
					<p>Jones, Robert Merle</p>
					<p>Justice, Dolly Ellen</p>
					<p>Justice, Woodrow Wilson</p>
					<div id="K" className="text-xl font-bold">
						- K -
					</div>

					<p>Kelsey, Robert Monroe</p>
					<div id="L" className="text-xl font-bold">
						- L -
					</div>

					<p>Lambert, Harry Eldon</p>
					<p>Lankford, Sarah</p>
					<p>Leifeste, Steven Taylor</p>
					<p>Livingston, Ellen Caroline</p>
					<p>Livingston, Thomas Oliver</p>
					<div id="M" className="text-xl font-bold">
						- M -
					</div>

					<p>Magana, Eva (Evi) Montoya</p>
					<p>Martin, Annabelle Elison</p>
					<p>Martin, Elmer Constantin</p>
					<p>McClendon, Sarah</p>
					<p>McFarland, Kenneth Albert</p>
					<p>McGhie, Glenn Neff</p>
					<p>McNeely, NayDean Bronson</p>
					<p>McNeely, Preston L</p>
					<p>Meuleman, Lila Condit</p>
					<p>Miller, Edna Martina</p>
					<p>Miller, Eugene Carlton</p>
					<p>Moncur, Hazel Beth</p>
					<p>Moncur, Marjorie Clair Fonnesbeck</p>
					<p>Montgomery, Sallie E</p>
					<p>Morrell, Selma Shaw</p>
					<p>Morris, Leonard Wilkinson</p>
					<p>Morris, Ronald Lee</p>
					<div id="N" className="text-xl font-bold">
						- N -
					</div>

					<p>Neddo, Alice Osterhout</p>
					<p>Neddo, Charles Alvin (Lindy)</p>
					<p>Neddo, Dallen Jay</p>
					<p>Neddo, Eunice Parke</p>
					<p>Neddo, George W Jr</p>
					<p>Neddo, George Willard</p>
					<p>Neddo, Gladys Leona Smith</p>
					<p>Neddo, Gregory Wallace</p>
					<p>Neddo, Isaac James (Darby)</p>
					<p>Neddo, Isaac James Jr</p>
					<p>Neddo, Jackie Denise</p>
					<p>Neddo, Josephine Randazzo</p>
					<p>Neddo, Julia Anges</p>
					<p>Neddo, Keith</p>
					<p>Neddo, Melba Grace</p>
					<p>Neddo, Melvin Jay</p>
					<p>Neddo, Milton LeRoy</p>
					<p>Neddo, Nellie Cardon</p>
					<p>Neddo, Rodger Cardon Sr</p>
					<p>Neddo, Thomas Lloyd</p>
					<p>Nye, Afton Don</p>
					<p>Nye, Annie Fernand Francois Lucienne Alphonsine Hanchir</p>
					<p>Nye, Fredrick J</p>
					<p>Nye, Fredrick Merlin</p>
					<p>Nye, Hannah Rosanna Loveland</p>
					<div id="O" className="text-xl font-bold">
						- O -
					</div>

					<p>O&apos;Brien, Michael William</p>
					<p>Olson, Dorsle Jolley (Gus)</p>
					<p>Olson, Margaret (Maggie) Witts</p>
					<p>Ostberg, Grank (IcKey)</p>

					<div id="P" className="text-xl font-bold">
						- P -
					</div>

					<p>Parke, Cecilia Hutchison</p>
					<p>Parke, Delores (Dee) M</p>
					<p>Parke, Ether</p>
					<p>Parke, Ether Jay</p>
					<p>Parke, Glen Robert</p>
					<p>Parke, Marjorie</p>
					<p>Parke, Norma Garbanati</p>
					<p>Parke, Wilmer C (Dude)</p>
					<p>Paskett, Alice Naomi Neddo</p>
					<p>Paskett, Darrell H</p>
					<p>Paskett, Edwin Hadfield</p>
					<p>Paskett, Frank</p>
					<p>Paskett, Jessie Hadfield</p>
					<p>Paskett, Richard N</p>
					<p>Peak, Mary Lou Pierce</p>
					<p>Peavler, Martha Lee</p>
					<p>Peterson, Cecil Miles</p>
					<p>Peterson, Cory Neil</p>
					<p>Pierce, Charles</p>
					<p>Pierce, Dale Oscar</p>
					<p>Pierce, Dennis Dale</p>
					<p>Pierce, Jean Ludwig</p>
					<p>Pierce, Jesse M</p>
					<p>Pierce, Jessie Margurite</p>
					<p>Pierce, Lois Irene Parke</p>
					<p>Pierce, William M</p>
					<p>Powers, Ellis John</p>
					<p>Powers, Maxine Jones</p>
					<p>Powers, Rozann Janak</p>
					<p>Pulsipher, Nelma</p>
					<div id="R" className="text-xl font-bold">
						- R -
					</div>

					<p>Ransom, Ada Allphin</p>
					<p>Ransom, Anthon H</p>
					<p>Ransom, Duane</p>
					<p>Rasmussen, Lloyd (Schooney)</p>
					<p>Rasmussen, Robert</p>
					<p>Rayburn, K Denise Mayes</p>
					<p>Rebham, Hilda June</p>
					<p>Richards, Bessie</p>
					<p>Richens, Rex W</p>
					<p>Roberts, Frances Della Hitt</p>
					<p>Robertson, Anna Esula Gile</p>
					<p>Robertson, William H</p>
					<p>Robinson, Clair Taylor</p>
					<p>Rogers, Maurine Coursi</p>
					<p>Ruesch, Mary Alice Dalton</p>
					<div id="S" className="text-xl font-bold">
						- S -
					</div>

					<p>Sanders, John Louis</p>
					<p>Schlender, Edwin Charles</p>
					<p>Schorzman, Lloyd Eugene</p>
					<p>Schwartz, Maycie Laine</p>
					<p>Schorzman, Charlotte Lucille Bond</p>
					<p>Scott, James L</p>
					<p>Scott, Sadie R</p>
					<p>Scott, Theda May</p>
					<p>Scott, Victor S</p>
					<p>Sexton, Allen</p>
					<p>Sexton, Thelma Lometa McFarland</p>
					<p>Shaw, Eliza Cordelia Nye</p>
					<p>Shaw, Farren S</p>
					<p>Shaw, Samuel Holbrook</p>
					<p>Shaw, Terrence Lynn</p>
					<p>Shill, Leo Samuel</p>
					<p>Smith, Albert P (Jake)</p>
					<p>Smith, Baby</p>
					<p>Smith, Barbara Ella Loughmiller</p>
					<p>Smith, Beulha Kidd</p>
					<p>Smith, Beverly LuDean Udy</p>
					<p>Smith, Clifford B</p>
					<p>Smith, Emma Bainbridge O&apos;Bray</p>
					<p>Smith, Emma Loraine</p>
					<p>Smith, Flossie Ellen Parish</p>
					<p>Smith, John (Jack) Parish</p>
					<p>Smith, John O&apos;Bray</p>
					<p>Smith, Joseph Carl</p>
					<p>Smith, Joseph Dale</p>
					<p>Smith, Joseph Obray</p>
					<p>Smith, Laura Gunnell</p>
					<p>Smith, Lillie Gay</p>
					<p>Smith, Luella Bradley</p>
					<p>Smith, Margie Udy</p>
					<p>Smith, Mary Olive Ward</p>
					<p>Smith, Maxine</p>
					<p>Smith, Osmer W (Bob)</p>
					<p>Smith, Ralph Obray</p>
					<p>Smith, Samuel N Jr</p>
					<p>Smith, Samuel Napoleon Sr</p>
					<p>Smith, Terri Ann Danford</p>
					<p>Smith, Thomas Bradley</p>
					<p>Smith, Thomas Rawlings</p>
					<p>Smith, Vance Thomas</p>
					<p>Smith, Veric Rose Osterhout</p>
					<p>Spalding, Lucy A</p>
					<p>Stephens, Herbert Raymond</p>
					<p>Stephens, Rhoda E Behunin (Phyllis)</p>
					<p>Stevenson, Laura Grace</p>
					<p>Stevenson, Patrick B</p>
					<div id="T" className="text-xl font-bold">
						- T -
					</div>

					<p>Taylor, David Tell</p>
					<p>Taylor, Grace</p>
					<p>Taylor, Marian Wannetta Nye</p>
					<p>Teeter, Mary Elizabeth (Beth) Hurd</p>
					<p>Taylor, Sonya Gay Hales</p>
					<p>Teeter, Carolyn Marie Stephens</p>
					<p>Teeter, Teresa</p>
					<p>Teeter, Thomas Gay</p>
					<p>Teeter, Thomas Roy Emer</p>
					<p>Thompson, Jane Bosomworth</p>
					<p>Thompson, John Ernest</p>
					<p>Thompson, Larry LuWain</p>
					<p>Thornton, Coby</p>
					<p>Thornton, Cory</p>
					<p>Thornton, Jana Bell</p>
					<p>Thornton, Jay R</p>
					<p>Tracy, Bryce Kay</p>
					<p>Tracy, Fontella Harper</p>
					<p>Tracy, Jesse LaVere</p>
					<p>Tracy, Kendall (Kenny) L</p>
					<p>Tracy, Lorenzo David</p>
					<p>Tracy, Lorin/Lorenzo Mitchell</p>
					<p>Tracy, Maxine Ardellia Bass</p>
					<p>Tracy, Nina Lorraine Barrett</p>
					<p>Tracy, Tabatha Marie</p>
					<p>Tracy, Vander Martell</p>
					<p>Tuckett, Mary Ann</p>
					<p>Tyler, Alva S</p>
					<p>Tyler, James L</p>

					<div id="U" className="text-xl font-bold">
						- U -
					</div>

					<p>Udy, Barbara Alice Perrett</p>
					<p>Udy, Earl M</p>
					<p>Udy, Delma Rae Wight</p>
					<p>Udy, Mary Lessey</p>
					<p>Udy, Mathias Cowley Jr</p>
					<p>Udy, Maxine</p>
					<p>Udy, Orville</p>
					<p>Udy, Rex</p>
					<p>Udy, Robert Dean</p>
					<p>Udy, Velda Irene</p>
					<p>Udy, Vicki Diane</p>
					<div id="W" className="text-xl font-bold">
						- W -
					</div>

					<p>Ward, Catherine</p>
					<p>Ward, Charles Robert</p>
					<p>Ward, Eugene (Gene)</p>
					<p>Ward, Helen Kay</p>
					<p>Ward, John Charles</p>
					<p>Ward, Margaret Alice Parke</p>
					<p>Ward, Rex Woodrow</p>
					<p>Warneke, Henry A</p>
					<p>Warr, Alan Kay</p>
					<p>Warr, Brian</p>
					<p>Warr, Charles H</p>
					<p>Warr, Chloe Bell</p>
					<p>Warr, Janis Anne Hawkins</p>
					<p>Warr, Melvin Albert (Skeet)</p>
					<p>Warr, Olene K</p>
					<p>Welch, Arthur Francis</p>
					<p>Welch, Colleen Barbara</p>
					<p>Welch, Lucile</p>
					<p>Wheatley, Faith</p>
					<p>Whitaker, Arthur Don</p>
					<p>Whitaker, Jennifer Lynn</p>
					<p>Whitaker, LaRene Kay Wight</p>
					<p>Whitaker, Lois Peterson</p>
					<p>Whitaker, Wayne Ottley</p>
					<p>White, Bobby Lee</p>
					<p>White, Luther “Pete”</p>
					<p>White, Talmer Lynn</p>
					<p>White, Todd Allen</p>
					<p>Wight, Harold D</p>
					<p>Wight, Harvey J</p>
					<p>Wight, Jacob Blaine</p>
					<p>Wight, John Harvey (Jack)</p>
					<p>Wight, Sarah Mae Darrington</p>
					<p>Wight, Viola June Engelking</p>
					<p>Williams, Nellie</p>
					<p>Woodland, Kent</p>
					<p>Woodland, Leola Ione McKee</p>
					<div id="Z" className="text-xl font-bold">
						- Z -
					</div>

					<p>Zobell, Bernice P Gunnell</p>
					<p>Zobell, Rex Scholes</p>
					<p>Zollinger, Orson James</p>
					<p>Zollinger, Darien</p>
				</CardContent>
			</Card>
			{showScroll && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-4 right-4 p-2 rounded-full shadow bg-white border text-xs text-gray-500 hover:text-black transition-opacity"
					aria-label="Scroll to top"
				>
					↑ Top
				</button>
			)}
		</div>
	)
}
