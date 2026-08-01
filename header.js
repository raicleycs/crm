import {site} from '../dados/dadosSite.js';
export function Header(){

    return `<header class="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8">
          <button class="font-bold text-slate-900 lg:hidden">${site.nome}</button>
          <div class="hidden max-w-md flex-1 md:block"><label class="relative block"><span class="sr-only">Buscar</span><input class="w-full rounded-lg border-0 bg-slate-100 py-2 pl-4 pr-4 text-sm outline-none ring-brand-500 focus:ring-2" placeholder="Buscar cliente, lead ou tarefa..." type="search" /></label></div>
          <div class="flex items-center gap-3"><button class="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Notificações">🔔</button><button class="rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-700" data-open-lead-modal>Novo lead</button></div>
        </header>`;
}
