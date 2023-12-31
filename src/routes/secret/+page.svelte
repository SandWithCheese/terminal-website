<svelte:head>
	<title>What is this?</title>
	<meta name="description" content="What is this?" />
</svelte:head>

{@html `<!-- What is this script tag?-->`}
{@html `
    <script>
        // Good Luck!
        function encrypt(plaintext){
            const len = plaintext.length;
            const key = "sandwicheese";
            let temp = "";
            for (let i = 0; i < len; i = i + 2) {
                temp += String.fromCharCode(plaintext.charCodeAt(i));
            }

            for (let i = 1; i < len; i = i + 2) {
                temp += String.fromCharCode(plaintext.charCodeAt(i));
            }

            let ciphertext = "";
            for (let i = 0; i < len; i++) {
                ciphertext += (temp.charCodeAt(i) ^ key.charCodeAt(i % key.length)).toString(16).padStart(2, "0");
            }

            // ciphertext in hexcode
            return ciphertext;
        }

        const ciphertext = "00071916285a5058080b0e5544555d000105135b52";
    </script>
    `}
