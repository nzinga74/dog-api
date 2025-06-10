class ErrorConstants {
  public static readonly EMAIL_ALREADY_EXISTS: string =
    "Email já Existe no sistema";
  public static readonly EMAIL_OR_PASSWORD_NOT_EXISTS: string =
    "Email ou palavra passe não encontrado";
  public static readonly CREATE_CLIENT_ERROR: string = "Erro ao criar client";
  public static readonly CREATE_USER_ERROR: string = "Erro ao criar usuário";
  public static readonly CREATE_PROPERTY_TYPER_ERROR: string =
    "Erro ao cadastrar tipo de propriedade";
  public static readonly CREATE_DOG_ERROR: string = "Erro ao cadastrar  Cão";
  public static readonly CREATE_EMPLOYEE_ERROR: string =
    "Erro ao cadastrar funcionário";
  public static readonly DELETE_DOG_ERROR: string = "Erro ao apagar Cão";
  public static readonly LIST_DOG_ERROR: string = "Erro ao listar Cães";
  public static readonly LIST_ADOPTION_ERROR: string = "Erro ao listar adoções";
  public static readonly CREATE_CONTRACT_WITH_SAME_CLIENT_PROPERTY: string =
    "Erro ao criar um contracto com mesmo cliente e propriedade";
  public static readonly CREATE_ADOPTION_ERROR: string = "Erro ao criar adoção";
  public static readonly CREATE_SELL_ERROR: string = "Erro ao criar venda";
  public static readonly LIST_CONTRACT_ERROR: string =
    "Erro ao listar contrato";
  public static readonly FIND_DOG_ERROR: string = "Cão não encontrado";
  public static readonly LIST_PROPERTY_ERROR: string =
    "Erro ao listar propriedade";
}
export { ErrorConstants };
