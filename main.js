/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTS = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, theme, mealType, meat, beverage) {
    // create nft
    const nft = {
        "name": name,
        "theme": theme,
        "mealType": mealType,
        "meat": meat,
        "beverage": beverage
    };

    // display minted nft
    console.log('Minted NFT ' + (NFTS.length + 1) + ':');
    console.log('{');
    console.log('\t"name": "' + nft.name + '"');
    console.log('\t"theme": "' + nft.theme + '"');
    console.log('\t"mealType": "' + nft.mealType + '"');
    console.log('\t"meat": "' + nft.meat + '"');
    console.log('\t"beverage": "' + nft.beverage + '"');
    console.log('}');

    // add to list of nfts
    NFTS.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log('Displaying NFTS...');

    for (let i = 0; i < NFTS.length; i++) {
        // get nft
        const nft = NFTS[i]

        // display minted nft
        console.log('NFT ' + (i + 1) + ':');
        console.log('{');
        console.log('\t"name": "' + nft.name + '"');
        console.log('\t"theme": "' + nft.theme + '"');
        console.log('\t"mealType": "' + nft.mealType + '"');
        console.log('\t"meat": "' + nft.meat + '"');
        console.log('\t"beverage": "' + nft.beverage + '"');
        console.log('}');
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log('Total NFTs Minted: ' + NFTS.length);
}

// call your functions below this line
mintNFT('ToBrunch', 'Starving in College', 'Brunch', 'Chicken', 'Hot Chocolate');
mintNFT('YesterLunch', 'Morning Glow', 'Lunch', 'Pork', 'Hot Chocolate');
getTotalSupply();
mintNFT('SomeDinner', 'Late Night', 'Dinner', 'Pork', 'Water');
listNFTs();
getTotalSupply();
