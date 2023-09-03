export type List = Array<{ href: string; label: string; keywords: string; badge?: string }>;
export const menuNavLinks: Record<string, Array<{ title: string; list: List }>> = {
	'/chatgpt': [
		{
			title: 'GPT Wrapper',
			list: [
				{ href: '/chatgpt', label: 'GPT Wrapper', keywords: 'gpt, wrapper, chatgpt' },
				{ href: '/chatgpt/introduction', label: 'Introduction', keywords: 'svelte, sirens, license, release' },
				{
					href: '/chatgpt/get-started',
					label: 'Get Started',
					keywords: 'start, install, cli, tailwind, themes, stylesheets'
				}
			]
		}
	],
	'/autopilot': [
		{
			title: 'AutoPilot',
			list: [
				{
					href: '/autopilot',
					label: 'AutoPilot',
					keywords: 'body, scroll, scrollbar, hr, horizontal, rule, divider'
				}
			]
		}
	],
	'/settings': [
		{
			title: 'Settings',
			list: [
				{ href: '/settings', label: 'Settings', keywords: 'copy, contenteditable, html, input' },
				{
					href: '/settings?open=api',
					label: 'API Mangement',
					keywords: 'svg, filtering, image, images, effect'
				},
				{
					href: '/settings?open=wrapper',
					label: 'GPT Wrapper Settings',
					keywords: 'form, modal, a11y, accessibility, keyboard, interaction'
				},
				{ href: '/settings?open=pilot', label: 'AutoPilot Settings', keywords: 'settings, autopilot' }
			]
		}
	]
};
