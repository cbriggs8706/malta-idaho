const ordinances = [
	{
		number: 1,
		title: 'Fixing Time and Place of Meeting',
		desc: '',
		url: '/next.svg',
		transcript: '',
	},
	{
		number: 2,
		title: 'Annual Tax Levies 1959/1960',
		desc: '',
		url: '/vercel.svg',
		transcript: '',
	},
	{ number: 3, title: 'Budget 1959/1960', desc: '', url: '', transcript: '' },
	{ number: 4, title: 'Budget 1973', desc: '', url: '', transcript: '' },
	{ number: 5, title: 'Franchise ATC', desc: '', url: '', transcript: '' },
	{ number: 6, title: 'Budget 1974', desc: '', url: '', transcript: '' },
	{
		number: 7,
		title: 'Interim Budget 1976',
		desc: '',
		url: '',
		transcript: '',
	},
	{
		number: 8,
		title: 'Interim Budget 1976',
		desc: '',
		url: '',
		transcript: '',
	},
	{ number: 9, title: 'Budget 1976', desc: '', url: '', transcript: '' },
	{ number: 10, title: 'Life Safety Code', desc: '', url: '', transcript: '' },
	{
		number: 11,
		title: 'Uniform Building Code',
		desc: '',
		url: '',
		transcript: '',
	},
	{
		number: 12,
		title: 'Interim Budget 1977',
		desc: '',
		url: '',
		transcript: '',
	},
	{ number: 13, title: 'Budget 1976/1977', desc: '', url: '', transcript: '' },
	{ number: 14, title: 'Budget 1977/1978', desc: '', url: '', transcript: '' },
	{ number: 15, title: 'Budget 1978/1979', desc: '', url: '', transcript: '' },
	{ number: 16, title: 'Budget 1979/1980', desc: '', url: '', transcript: '' },
	{ number: 17, title: 'Budget 1980/1981', desc: '', url: '', transcript: '' },
	{ number: 18, title: 'Budget 1981/1982', desc: '', url: '', transcript: '' },
	{ number: 19, title: 'Budget 1982/1983', desc: '', url: '', transcript: '' },
	{ number: 20, title: 'Budget 1983/1984', desc: '', url: '', transcript: '' },
	{ number: 21, title: 'Budget 1984/1985', desc: '', url: '', transcript: '' },
	{ number: 22, title: 'Budget 1985/1986', desc: '', url: '', transcript: '' },
	{ number: 23, title: 'Beer', desc: '', url: '', transcript: '' },
	{ number: 24, title: 'Liquor', desc: '', url: '', transcript: '' },
	{ number: 25, title: 'Budget 1986/1987', desc: '', url: '', transcript: '' },
	{ number: 26, title: 'Budget 1987/1988', desc: '', url: '', transcript: '' },
	{ number: 27, title: 'Budget 1988/1989', desc: '', url: '', transcript: '' },
	{
		number: 28,
		title: 'Grant of Authority – Intermountain Gas',
		desc: '',
		url: '',
		transcript: '',
	},
	{
		number: 29,
		title: 'Grant of Authority – Intermountain Gas',
		desc: '',
		url: '',
		transcript: '',
	},
	{ number: 30, title: 'Budget 1990/1991', desc: '', url: '', transcript: '' },
	{
		number: 31,
		title: 'Sell of Real Property “Airport”',
		desc: '',
		url: '',
		transcript: '',
	},
	{ number: 32, title: 'Budget 1991/1992', desc: '', url: '', transcript: '' },
	{ number: 33, title: 'Budget 1992/1993', desc: '', url: '', transcript: '' },
	{ number: 34, title: 'Curfew', desc: '', url: '', transcript: '' },
	{ number: 35, title: 'Budget 1993/1994', desc: '', url: '', transcript: '' },
	{ number: 36, title: 'Budget 1994/1995', desc: '', url: '', transcript: '' },
	{
		number: 37,
		title: 'Area of Impact Agreement',
		desc: '',
		url: '',
		transcript: '',
	},
	{ number: 38, title: 'Graffiti', desc: '', url: '', transcript: '' },
	{ number: 39, title: 'Budget 1995/1996', desc: '', url: '', transcript: '' },
	{ number: 40, title: 'Budget 1996/1997', desc: '', url: '', transcript: '' },
	{
		number: 41,
		title: 'Flood Damage Prevention',
		desc: '',
		url: '',
		transcript: '',
	},
	{ number: 42, title: 'Budget 1997/1998', desc: '', url: '', transcript: '' },
	{
		number: 43,
		title: 'Poll/Election Times',
		desc: '',
		url: '',
		transcript: '',
	},
	{ number: 44, title: 'Budget 1998/1999', desc: '', url: '', transcript: '' },
	{ number: 45, title: 'Dog Licensing', desc: '', url: '', transcript: '' },
	{ number: 46, title: 'Budget 1999/2000', desc: '', url: '', transcript: '' },
	{ number: 47, title: 'Budget 2000/2001', desc: '', url: '', transcript: '' },
	{ number: 48, title: '', desc: '', url: '', transcript: '' },
	{ number: 49, title: 'Budget 2002/2003', desc: '', url: '', transcript: '' },
	{ number: 50, title: 'Weed Control', desc: '', url: '', transcript: '' },
	{ number: 51, title: '', desc: '', url: '', transcript: '' },
	{ number: 52, title: 'Budget 2004/2005', desc: '', url: '', transcript: '' },
	{ number: 53, title: 'Dog Licensing', desc: '', url: '', transcript: '' },
	{ number: 54, title: 'Budget 2005/2006', desc: '', url: '', transcript: '' },
	{ number: 55, title: '', desc: '', url: '', transcript: '' },
	{ number: 56, title: 'Budget 2006/2007', desc: '', url: '', transcript: '' },
	{ number: 57, title: 'Budget 2007/2008', desc: '', url: '', transcript: '' },
	{ number: 58, title: 'Budget 2008/2009', desc: '', url: '', transcript: '' },
	{ number: 59, title: 'Budget 2009/2010', desc: '', url: '', transcript: '' },
	{
		number: 60,
		title: 'Speed Limit 4th Street North',
		desc: '',
		url: '',
		transcript: '',
	},
	{ number: 61, title: 'Budget 2010/2011', desc: '', url: '', transcript: '' },
	{
		number: 62,
		title: 'Official Newspaper',
		desc: '',
		url: '',
		transcript: '',
	},
	{ number: 63, title: 'Budget 2011/2012', desc: '', url: '', transcript: '' },
	{ number: 64, title: 'Budget 2012/2013', desc: '', url: '', transcript: '' },
	{ number: 65, title: 'Budget 2013/2014', desc: '', url: '', transcript: '' },
	{
		number: 66,
		title: 'Speed Limits within City Limits',
		desc: '',
		url: '',
		transcript: '',
	},
	{ number: 67, title: 'Budget 2014/2015', desc: '', url: '', transcript: '' },
	{ number: 68, title: 'Budget 2015/2016', desc: '', url: '', transcript: '' },
	{ number: 69, title: 'Budget 2016/2017', desc: '', url: '', transcript: '' },
	{ number: 70, title: 'Budget 2017/2019', desc: '', url: '', transcript: '' },
	{
		number: 71,
		title: 'Budget 2018/2019 repealed',
		desc: '',
		url: '',
		transcript: '',
	},
	{ number: 72, title: 'Budget 2018/2019', desc: '', url: '', transcript: '' },
]

export default ordinances
