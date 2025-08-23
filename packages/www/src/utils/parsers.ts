import YAML from "yaml"

export function parseYaml<T>(file: string) {
    return YAML.parse(file) as any
}

