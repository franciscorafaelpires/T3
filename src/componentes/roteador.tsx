import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "../pages/cliente/formularioCadastroCliente";
import ListaCliente from "../pages/cliente/listaClientes";
import FormularioCadastroProduto from "../pages/produto/formularioCadastroProduto";
import ListaProduto from "../pages/produto/listaProdutos";
import FormularioCadastroServico from "../pages/servico/formularioCadastroServico";
import ListaServico from "../pages/servico/listaServicos";
import FormularioCadastroPet from "../pages/pet/formularioCadastroPet";
import ListaPet from "../pages/pet/listaPets";
import Cliente from "../model/cliente";
import CPF from "../model/cpf";
import Produto from "../model/produto";
import Servico from "../model/servico";
import Pet from "../model/pet";
import Estatisticas from "../pages/estatisticas";

const Roteador: React.FC = () => {
    const [tela, setTela] = useState('Clientes');
    const [clientes, setClientes] = useState<Cliente[]>([
        new Cliente(1, 'Francisco', 'Chico', new CPF('12345678901', new Date())),
        new Cliente(2, 'Rafael', 'Rafa', new CPF('12345678902', new Date())),
    ]);
    const [produtos, setProdutos] = useState<Produto[]>([
        new Produto(1, 'Ração', 50),
        new Produto(2, 'Brinquedo', 20),
    ]);
    const [servicos, setServicos] = useState<Servico[]>([
        new Servico(1, 'Banho', 30),
        new Servico(2, 'Tosa', 40),
    ]);
    const [pets, setPets] = useState<Pet[]>([
        new Pet(1, 'Rex', 'Labrador', 'Macho', 'Cachorro'),
        new Pet(2, 'Miau', 'Siamês', 'Fêmea', 'Gato'),
    ]);
    const [clienteEmEdicao, setClienteEmEdicao] = useState<Cliente | null>(null);
    const [produtoEmEdicao, setProdutoEmEdicao] = useState<Produto | null>(null);
    const [servicoEmEdicao, setServicoEmEdicao] = useState<Servico | null>(null);
    const [petEmEdicao, setPetEmEdicao] = useState<Pet | null>(null);

    const navegarParaCadastroCliente = () => {
        setTela('Cadastrar Cliente');
        setClienteEmEdicao(null);
    }

    const navegarParaCadastroProduto = () => {
        setTela('Cadastrar Produto');
        setProdutoEmEdicao(null);
    }

    const navegarParaCadastroServico = () => {
        setTela('Cadastrar Serviço');
        setServicoEmEdicao(null);
    }

    const navegarParaCadastroPet = () => {
        setTela('Cadastrar Pet');
        setPetEmEdicao(null);
    }

    const cadastrarCliente = (cliente: Cliente) => {
        setClientes([...clientes, cliente]);
        setTela('Clientes');
    }

    const cadastrarProduto = (produto: Produto) => {
        setProdutos([...produtos, produto]);
        setTela('Produtos');
    }

    const cadastrarServico = (servico: Servico) => {
        setServicos([...servicos, servico]);
        setTela('Serviços');
    }

    const cadastrarPet = (pet: Pet) => {
        setPets([...pets, pet]);
        setTela('Pets');
    }

    const selecionarClienteParaEdicao = (cliente: Cliente) => {
        setClienteEmEdicao(cliente);
        setTela('Cadastrar Cliente');
    }

    const atualizarCliente = (clienteAtualizado: Cliente) => {
        setClientes(clientes.map(cliente =>
            cliente.id === clienteAtualizado.id ? clienteAtualizado : cliente
        ));
        setClienteEmEdicao(null);
        setTela('Clientes');
    }

    const excluirCliente = (id: number) => {
        setClientes(clientes.filter(cliente => cliente.id !== id));
    }

    const selecionarProdutoParaEdicao = (produto: Produto) => {
        setProdutoEmEdicao(produto);
        setTela('Cadastrar Produto');
    }

    const atualizarProduto = (produtoAtualizado: Produto) => {
        setProdutos(produtos.map(produto =>
            produto.id === produtoAtualizado.id ? produtoAtualizado : produto
        ));
        setProdutoEmEdicao(null);
        setTela('Produtos');
    }

    const excluirProduto = (id: number) => {
        setProdutos(produtos.filter(produto => produto.id !== id));
    }

    const selecionarServicoParaEdicao = (servico: Servico) => {
        setServicoEmEdicao(servico);
        setTela('Cadastrar Serviço');
    }

    const atualizarServico = (servicoAtualizado: Servico) => {
        setServicos(servicos.map(servico =>
            servico.id === servicoAtualizado.id ? servicoAtualizado : servico
        ));
        setServicoEmEdicao(null);
        setTela('Serviços');
    }

    const excluirServico = (id: number) => {
        setServicos(servicos.filter(servico => servico.id !== id));
    }

    const selecionarPetParaEdicao = (pet: Pet) => {
        setPetEmEdicao(pet);
        setTela('Cadastrar Pet');
    }

    const atualizarPet = (petAtualizado: Pet) => {
        setPets(pets.map(pet =>
            pet.id === petAtualizado.id ? petAtualizado : pet
        ));
        setPetEmEdicao(null);
        setTela('Pets');
    }

    const excluirPet = (id: number) => {
        setPets(pets.filter(pet => pet.id !== id));
    }

    const selecionarView = (novaTela: string, evento: Event) => {
        evento.preventDefault();
        console.log(novaTela);
        setTela(novaTela);
        setClienteEmEdicao(null); // Limpa o cliente em edição ao mudar de tela
        setProdutoEmEdicao(null); // Limpa o produto em edição ao mudar de tela
        setServicoEmEdicao(null); // Limpa o serviço em edição ao mudar de tela
        setPetEmEdicao(null); // Limpa o pet em edição ao mudar de tela
    }

    let barraNavegacao = <BarraNavegacao seletorView={selecionarView} botoes={['Clientes', 'Produtos', 'Serviços', 'Pets', 'Estatísticas']} />
    if (tela === 'Clientes') {
        return (
            <>
                {barraNavegacao}
                <ListaCliente clientes={clientes} selecionarClienteParaEdicao={selecionarClienteParaEdicao} excluirCliente={excluirCliente} navegarParaCadastroCliente={navegarParaCadastroCliente} />
            </>
        )
    } else if (tela === 'Produtos') {
        return (
            <>
                {barraNavegacao}
                <ListaProduto produtos={produtos} selecionarProdutoParaEdicao={selecionarProdutoParaEdicao} excluirProduto={excluirProduto} navegarParaCadastroProduto={navegarParaCadastroProduto} />
            </>
        )
    } else if (tela === 'Serviços') {
        return (
            <>
                {barraNavegacao}
                <ListaServico servicos={servicos} selecionarServicoParaEdicao={selecionarServicoParaEdicao} excluirServico={excluirServico} navegarParaCadastroServico={navegarParaCadastroServico} />
            </>
        )
    } else if (tela === 'Pets') {
        return (
            <>
                {barraNavegacao}
                <ListaPet pets={pets} selecionarPetParaEdicao={selecionarPetParaEdicao} excluirPet={excluirPet} navegarParaCadastroPet={navegarParaCadastroPet} />
            </>
        )
    } else if (tela === 'Cadastrar Cliente') {
        return (
            <>
                {barraNavegacao}
                <FormularioCadastroCliente cadastrarCliente={cadastrarCliente} clienteEmEdicao={clienteEmEdicao} atualizarCliente={atualizarCliente} />
            </>
        )
    } else if (tela === 'Cadastrar Produto') {
        return (
            <>
                {barraNavegacao}
                <FormularioCadastroProduto cadastrarProduto={cadastrarProduto} produtoEmEdicao={produtoEmEdicao} atualizarProduto={atualizarProduto} />
            </>
        )
    } else if (tela === 'Cadastrar Serviço') {
        return (
            <>
                {barraNavegacao}
                <FormularioCadastroServico cadastrarServico={cadastrarServico} servicoEmEdicao={servicoEmEdicao} atualizarServico={atualizarServico} />
            </>
        )
    } else if (tela === 'Cadastrar Pet') {
        return (
            <>
                {barraNavegacao}
                <FormularioCadastroPet cadastrarPet={cadastrarPet} petEmEdicao={petEmEdicao} atualizarPet={atualizarPet} />
            </>
        )
    } else if (tela === 'Estatísticas') {
        return (
            <>
                {barraNavegacao}
                <Estatisticas clientes={clientes} produtos={produtos} servicos={servicos} pets={pets} />
            </>
        )
    }
    return null;
}

export default Roteador;