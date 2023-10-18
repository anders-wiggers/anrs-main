export type List = Array<{ href: string; label: string; keywords: string; badge?: string }>;
export const menuNavLinks: Record<string, Array<{ title: string; list: List }>> = {
	'/software': [
		{
			title: 'Open Sourced Software',
			list: [
				{ href: '/software', label: 'Open Sourced Software Repository', keywords: '' }
			]
		}
	],
	'/projects': [
		{
			title: 'Projects',
			list: [
				{
					href: '/projects/tda',
					label: 'Tour de Azeroth',
					keywords: 'server, world of warcraft'
				},
				{
					href: '/projects/ccc',
					label: 'Christmas Calender Checker',
					keywords: 'deep learning, computer vision'
				},
			]
		}
	],
	'/consulting': [
		{
			title: 'Consultancy',
			list: [
				{
					href: '/consulting',
					label: 'Consultancy',
					keywords: 'consulting, work, cms, azure, cloud, cloud engineering'
				}
			]
		}
	],
	'/academic': [
		{
			title: 'Academic Endeavor',
			list: [
				{ href: '/academic', label: 'Academic Achivments', keywords: 'academic, com' },
				{
					href: '/academic#master-thesis',
					label: 'Master Thesis',
					keywords: 'distributed systems, system security, non fungble token'
				},
				{
					href: '/academic#bachelor-thesis',
					label: 'Bachelor Thesis',
					keywords: 'data viz, data visualization, public school, data gathering'
				},
				{
					href: '/academic#phystically-uncloneable-functions',
					label: 'Phystically Uncloneable Functions',
					keywords: 'system security, puf'
				},
			]
		}
	],
	'/cv': [
		{
			title: 'Curriculum Vitae',
			list: [
				{
					href: '/cv',
					label: 'Curriculum Vitae',
					keywords: ''
				}
			]
		}
	],
};
