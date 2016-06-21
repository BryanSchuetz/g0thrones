// I stole all this stuff from here: https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js

walk(document.body);

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	var child, next;

	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)  {
	var v = textNode.nodeValue;

    v = v.replace(/\b#got\b/g, "...Spoilers...");
		v = v.replace(/\bgame of thrones\b/g, "...Spoilers...");
		v = v.replace(/\bGame of Thrones\b/g, "...Spoilers...");
		v = v.replace(/\bgameofthrones\b/g, "...Spoilers...");
		v = v.replace(/\bJohn Snow\b/g, "...Spoilers...");
		v = v.replace(/\bTyrion\b/g, "...Spoilers...");
		v = v.replace(/\bArya\b/g, "...Spoilers...");
		v = v.replace(/\bStark\b/g, "...Spoilers...");
		v = v.replace(/\bWinterfell\b/g, "...Spoilers...");
		v = v.replace(/\bgeorgerrmartin\b/g, "...Spoilers...");
		v = v.replace(/\bGeorge Martin\b/g, "...Spoilers...");
		v = v.replace(/\bGeorge R. R. Martin\b/g, "...Spoilers...");
		v = v.replace(/\bTargaryen\b/g, "...Spoilers...");
		v = v.replace(/\bDaenerys\b/g, "...Spoilers...");
		v = v.replace(/\bBaratheon\b/g, "...Spoilers...");
		v = v.replace(/\bMartell\b/g, "...Spoilers...");
		v = v.replace(/\bLannister\b/g, "...Spoilers...");
		v = v.replace(/\bFlorent\b/g, "...Spoilers...");
		v = v.replace(/\bTully\b/g, "...Spoilers...");
		v = v.replace(/\bWhite Walkers\b/g, "...Spoilers...");
		v = v.replace(/\bUmber\b/g, "...Spoilers...");
		v = v.replace(/\bGreyjoy\b/g, "...Spoilers...");
		v = v.replace(/\bwinter is comming\b/g, "...Spoilers...");
		v = v.replace(/\bSansa\b/g, "...Spoilers...");
		v = v.replace(/\bBrandon\b/g, "...Spoilers...");
		v = v.replace(/\bRickon\b/g, "...Spoilers...");
		v = v.replace(/\bTheon\b/g, "...Spoilers...");
		v = v.replace(/\bAsha\b/g, "...Spoilers...");
		v = v.replace(/\bEuron\b/g, "...Spoilers...");
		v = v.replace(/\bVictarion\b/g, "...Spoilers...");
		v = v.replace(/\bKings Landing\b/g, "...Spoilers...");
		v = v.replace(/\bCastle Black\b/g, "...Spoilers...");
		v = v.replace(/\bWesteros\b/g, "...Spoilers...");
		v = v.replace(/\bNights Watch\b/g, "...Spoilers...");
		v = v.replace(/\bTyrell\b/g, "...Spoilers...");
		v = v.replace(/\bJorah\b/g, "...Spoilers...");
		v = v.replace(/\bMormont\b/g, "...Spoilers...");
		v = v.replace(/\bSamwell\b/g, "...Spoilers...");
		v = v.replace(/\bTarly\b/g, "...Spoilers...");
		v = v.replace(/\bPetyr\b/g, "...Spoilers...");
		v = v.replace(/\bBaelish\b/g, "...Spoilers...");
		v = v.replace(/\bAsshai\b/g, "...Spoilers...");
		v = v.replace(/\bRed Priestess\b/g, "...Spoilers...");
		v = v.replace(/\bVolantis\b/g, "...Spoilers...");
		v = v.replace(/\bClegane\b/g, "...Spoilers...");
		v = v.replace(/\bDavos\b/g, "...Spoilers...");
		v = v.replace(/\bSeaworth\b/g, "...Spoilers...");
		v = v.replace(/\bDrogo\b/g, "...Spoilers...");
		v = v.replace(/\bKhal\b/g, "...Spoilers...");
		v = v.replace(/\bValyria\b/g, "...Spoilers...");
		v = v.replace(/\bMeereen\b/g, "...Spoilers...");
		v = v.replace(/\bDothrak\b/g, "...Spoilers...");
		v = v.replace(/\bPentos\b/g, "...Spoilers...");
		v = v.replace(/\bAstapor\b/g, "...Spoilers...");
		v = v.replace(/\bYunkai\b/g, "...Spoilers...");
		v = v.replace(/\bLys\b/g, "...Spoilers...");
		v = v.replace(/\bSunspear\b/g, "...Spoilers...");
		v = v.replace(/\bPyke\b/g, "...Spoilers...");
		v = v.replace(/\bTyrosh\b/g, "...Spoilers...");
		v = v.replace(/\bRoose\b/g, "...Spoilers...");
		v = v.replace(/\bBolton\b/g, "...Spoilers...");
		v = v.replace(/\bRamsay\b/g, "...Spoilers...");


	textNode.nodeValue = v;
}
