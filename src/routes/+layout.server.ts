export async function load({ cookies }) {
    const cookieState = cookies.get('anrs-cookie');

    return { cookieState };
}