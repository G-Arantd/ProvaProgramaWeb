import { ProdutoCriacaoDto } from "../../data/entity/Produto";
import { ProdutoRepository } from "../../data/repository/ProdutoRepository";

export class SalvarProdutoUseCase {

    constructor(private produtoRepository: ProdutoRepository) { }

    async execute(produto: ProdutoCriacaoDto){
        try {

            const produtoCriado = await this.produtoRepository.salvarProduto(produto);
            return produtoCriado;
            
        } catch (error) {
            throw new Error("Problema ao criar produto")
        }
    }

}