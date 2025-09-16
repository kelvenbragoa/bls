# 🎨 Guia de Temas PrimeVue

## Temas Disponíveis

### 1. 🌟 **Aura** (Atual)
**Descrição**: Tema moderno e limpo com bordas arredondadas
```javascript
import Aura from '@primevue/themes/aura';
```

### 2. 💎 **Lara**
**Descrição**: Tema elegante e profissional, inspirado no Material Design
```javascript
import Lara from '@primevue/themes/lara';
```

### 3. 🏗️ **Material**
**Descrição**: Baseado no Material Design do Google
```javascript
import Material from '@primevue/themes/material';
```

### 4. 🌙 **Nora**
**Descrição**: Tema minimalista e sofisticado
```javascript
import Nora from '@primevue/themes/nora';
```

## Como Trocar o Tema

### Passo 1: Importar o tema desejado
No arquivo `resources/js/app.js`, substitua a linha:
```javascript
import Aura from '@primevue/themes/aura';
```

Por um dos seguintes:
```javascript
// Para Lara
import Lara from '@primevue/themes/lara';

// Para Material
import Material from '@primevue/themes/material';

// Para Nora
import Nora from '@primevue/themes/nora';
```

### Passo 2: Atualizar a configuração
Substitua `Aura` pela variável do tema escolhido:
```javascript
app.use(PrimeVue, {
    theme: {
        preset: Lara, // Mude aqui para o tema desejado
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
```

## Comparação Rápida

| Tema     | Estilo                | Ideal Para               |
|----------|----------------------|--------------------------|
| Aura     | Moderno, arredondado | Aplicações gerais        |
| Lara     | Elegante, profissional| Dashboards corporativos  |
| Material | Google Material       | Apps Android/modernos    |
| Nora     | Minimalista          | Interfaces clean         |

## Personalização Avançada

### 🎨 Cores Personalizadas

#### Opção 1: Cores Azuis (Aplicada Atualmente)
```javascript
import { definePreset } from '@primevue/themes';

const LaraBlue = definePreset(Lara, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        }
    }
});

app.use(PrimeVue, {
    theme: {
        preset: LaraBlue,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
```

#### Opção 2: Outras Cores Disponíveis
```javascript
// Para cores vermelhas
primary: {
    50: '{red.50}',
    500: '{red.500}',
    // ... outros tons
}

// Para cores roxas
primary: {
    50: '{purple.50}',
    500: '{purple.500}',
    // ... outros tons
}

// Para cores personalizadas específicas
primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // Cor principal
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49'
}
```

### 🎯 Cores Temáticas para LMS

#### Azul Educacional (Recomendado)
- **Confiança e profissionalismo**
- **Ideal para plataformas educacionais**
- **Boa legibilidade**

#### Verde Crescimento
- **Representa progresso e sucesso**
- **Motivacional para estudantes**

#### Roxo Criativo
- **Estimula criatividade e inovação**
- **Moderno e sofisticado**

Você também pode personalizar qualquer tema:
```javascript
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark',
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        }
    }
});
```

## Recomendação para seu LMS

Para um sistema de cursos online como o seu, recomendo:
1. **Aura** - Moderno e friendly para estudantes
2. **Lara** - Profissional para área administrativa
