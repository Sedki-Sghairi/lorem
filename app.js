// lorem text
const text = [
	`Optimism is a strategy for making a better future. Because unless you believe that the future can be better, it’s unlikely you will step up and take responsibility for making it so. If you assume that there’s no hope, you guarantee that there will be no hope. If you assume that there is an instinct for freedom, there are opportunities to change things, there’s a chance you may contribute to making a better world. The choice is yours.`,
	`Wherever I look, I see signs of the commandment to honor one's parents and nowhere of a commandment that calls for the respect of a child. kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
	`Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
	`If you look at history, even recent history, you see that there is indeed progress. . . . Over time, the cycle is clearly, generally upwards. And it doesn’t happen by laws of nature. And it doesn’t happen by social laws. . . . It happens as a result of hard work by dedicated people who are willing to look at problems honestly, to look at them without illusions, and to go to work chipping away at them, with no guarantee of success — in fact, with a need for a rather high tolerance for failure along the way, and plenty of disappointments.`,
	`Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. We shouldn’t be looking for heroes, we should be looking for good ideas Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
	`This opera's as lousy as it Contempt is the weapon of the weak and a defense against one's own despised and unwanted feelings. is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
	`Genuine forgiveness does not deny anger but faces it head-on.Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
	`Either you repeat the same conventional doctrines everybody is saying, or else you say something true, and it will sound like it’s from Neptune. cheese brie.`,
	`Salvia glossier subway tile, If the Nuremberg laws were applied, then every post-war American president would have been hanged. leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
	`Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
	`Rutters Plate Fleet boom chandler Brethren of the Coast Education is a system of imposed ignorance. handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
	` Education is a system of imposed ignorance. handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass The whole educational and professional training system is a very elaborate filter, which just weeds out people who are too independent, and who think for themselves, and who don’t know how to be submissive, and so on — because they’re dysfunctional to the institutions.`
];
const form = document.querySelector('.lorem-form');
const result = document.querySelector('.lorem-text');
const amount = document.getElementById('amount');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const value = parseInt(amount.value);
	const random = Math.floor(Math.random() * text.length);
	if (isNaN(value) || value <= 0 || value > text.length - 1) {
		result.innerHTML = `<p class="result">${text[random]}</p>`;
	} else {
		let tempText = text.slice(0, value);
		tempText = tempText
			.map(function(paragraph) {
				return `<p class = "result">${paragraph}</p>`;
			})
			.join('');
		result.innerHTML = tempText;
	}
});
