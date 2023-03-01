// license code
const licenseBank = [
	{
		license: "Apache 2.0 License",
		badge:
			"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/license/Apache-2.0)"
	},
	{
		license: "Boost Software License 1.0",
		badge:
			"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
	},
	{
		license: "BSD 3-Clause License",
		badge:
			"[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/license/BSD-3-Clause)"
	},
	{
		license: "BSD 2-Clause License",
		badge:
			"[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/license/BSD-2-Clause)"
	},
	{
		license: "Eclipse Public License 1.0",
		badge:
			"[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/license/EPL-1.0)"
	},
	{
		license: "MIT License",
		badge:
			"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/MIT)"
	},
	{
		license: "Mozilla Public License 2.0",
		badge:
			"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/license/MPL-2.0)"
	},
	{
		license: "The Perl License",
		badge:
			"[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/license/Artistic-2.0)"
	}
];

// array of license names to provide the choices in the inquirer prompt
const licenseArray = [];
licenseBank.forEach((licenseEl) => {
	licenseArray.push(licenseEl.license);
});

// function to identify the chosen license and extract the licenseBadge from licenseBank
const licenseChoice = (data) => {
	let licenseBadge = "";

	for (const license of licenseBank) {
		if (license.license == data.license) {
			licenseBadge = license.badge;
		}
	}

	// return the badge property from the licenseBank array
	return licenseBadge;
};

module.exports = { licenseBank, licenseArray, licenseChoice };
