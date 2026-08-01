import { Sidebar } from '../componentes/sidebar.js';
import { Header } from '../componentes/header.js';
import { Dashboard } from '../public/pages/dashboard-page.js';

const app = document.querySelector('#app');
const rotas = {
    '#/dashboard': Dashboard
}
function roteamento(){
    return window.location.hash || '#/dashboard';
}

async function RenderPage() {
    const rota = roteamento();
    const Page = rotas[rota] ?? Dashboard;
    const pageContent = typeof Page === 'function' ? Page() : Page;

    app.innerHTML = `
<div class="min-h-screen lg:grid lg:grid-cols-[256px_1fr]">
${Sidebar()}
<main class="min-w-0">
${Header()}
${pageContent}
</main>
</div>
`;

};
RenderPage()