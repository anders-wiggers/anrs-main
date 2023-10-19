/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

    const res = await fetch(`https://api.github.com/users/anders-wiggers/repos`);
    const items = await res.json();
    return {
        items
    };
}