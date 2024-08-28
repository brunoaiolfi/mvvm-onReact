import { Button, Flex, FormControl, FormHelperText, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react"
import { ChangeEvent, useRef, useState } from "react"
import { EmbeddingRepository } from "../../repositories/Embedding";

enum EmbeddingsCreateViewMode {
    MANUAL = "MANUAL",
    TEXT = "TEXT"
}

export function EmbeddingsCreateViewModel() {

    const toast = useToast();

    const [viewMode, setViewMode] = useState(EmbeddingsCreateViewMode.MANUAL);
    const [file, setFile] = useState<File>();
    const [text, setText] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const repository = new EmbeddingRepository();

    function renderHeaderButtons() {
        return (
            <Flex
                w="100%"
                alignItems="center"
                justifyContent="center"
                marginBottom="16px"
            >
                <Button
                    colorScheme="blue"
                    variant={viewMode === EmbeddingsCreateViewMode.MANUAL ? "solid" : "ghost"}
                    onClick={() => setViewMode(EmbeddingsCreateViewMode.MANUAL)}
                >
                    Manuais
                </Button>
                <Button
                    colorScheme="blue"
                    variant={viewMode === EmbeddingsCreateViewMode.TEXT ? "solid" : "ghost"}
                    onClick={() => setViewMode(EmbeddingsCreateViewMode.TEXT)}
                >
                    Textos
                </Button>
            </Flex>
        )
    }

    function renderFormBasedOnViewMode() {
        const dictionary = {
            [EmbeddingsCreateViewMode.MANUAL]: renderManualForm,
            [EmbeddingsCreateViewMode.TEXT]: renderTextForm
        }

        return dictionary[viewMode]()
    }

    function renderManualForm() {
        return <>
            <FormControl
                w="400px"
            >
                <FormLabel>
                    Manual
                </FormLabel>

                <Input
                    type="file"
                    ref={fileInputRef}
                    accept=".pdf"
                    display="none"
                    onChange={handleFileChange}
                />

                <Button
                    w="100%"
                    variant="outline"
                    fontSize="small"
                    onClick={() => fileInputRef.current?.click()}
                >
                    {file ? file.name : "Selecione um arquivo"}
                </Button>
                <FormHelperText>
                    Apenas arquivos .pdf
                </FormHelperText>
            </FormControl>

            <Button
                isLoading={isLoading}
                colorScheme="blue"
                variant="solid"
                marginTop="48px"
                w="100%"
                onClick={handleSubmitByManual}
            >
                Enviar
            </Button>
        </>
    }

    function renderTextForm() {
        return <>
            <FormControl
                w="600px"
            >
                <FormLabel>
                    Texto
                </FormLabel>
                <Textarea
                    placeholder="Insira o texto de treinamento aqui"
                    h="500px"
                    resize={"none"}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </FormControl>

            <Button
                colorScheme="blue"
                variant="solid"
                marginTop="48px"
                w="100%"
                onClick={handleSubmitByText}
                isLoading={isLoading}
            >
                Enviar
            </Button>
        </>
    }

    function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];

        if (file) {
            setFile(file);
        }
    }

    async function handleSubmitByManual() {
        if (!file) return toast({
            title: "Selecione um arquivo para enviar",
            status: "info"
        });

        setIsLoading(true);

        try {
            await repository.createByManual(file);
            setFile(undefined);

            toast({
                title: "Arquivo enviado com sucesso",
                status: "success",
            });
        } catch (error: any) {
            toast({
                title: `Erro ao enviar o arquivo. ${error.message}`,
                status: "error",
            });
        } finally {
            setIsLoading(false);
        }
    }

    async function handleSubmitByText() {
        if (!text) return toast({
            title: "Insira um texto para enviar",
            status: "info"
        });

        setIsLoading(true);

        try {
            await repository.createByText(text);
            setText("");

            toast({
                title: "Texto enviado com sucesso",
                status: "success",
            });
        } catch (error: any) {
            toast({
                title: `Erro ao enviar o texto. ${error.message}`,
                status: "error",
            });
        } finally {
            setIsLoading(false);
        }
    }

    return {
        renderHeaderButtons,
        renderFormBasedOnViewMode
    }
}