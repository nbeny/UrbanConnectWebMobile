import { useState } from 'react';
import { FilterState, FilterType } from '@/data/categories';

export const useFilters = (initialState?: Partial<FilterState>) => {
    const [filters, setFilters] = useState<FilterState>({
        type: 'Tous',
        categories: [],
        ...initialState
    });

    const handleTypeChange = (newType: FilterType) => {
        if (newType === 'Tous') {
            setFilters({ type: newType, categories: [] });
        } else {
            // Réinitialiser les catégories quand on change de type
            setFilters({ type: newType, categories: [] });
        }
    };

    const handleCategoryToggle = (categoryId: string) => {
        if (categoryId === 'tous') {
            setFilters(prev => ({ ...prev, categories: [] }));
            return;
        }

        setFilters(prev => {
            const currentCategories = prev.categories;
            const isSelected = currentCategories.includes(categoryId);
            
            if (isSelected) {
                // Désélectionner la catégorie
                return {
                    ...prev,
                    categories: currentCategories.filter(id => id !== categoryId)
                };
            } else {
                // Sélectionner la catégorie
                return {
                    ...prev,
                    categories: [...currentCategories, categoryId]
                };
            }
        });
    };

    const resetFilters = () => {
        setFilters({ type: 'Tous', categories: [] });
    };

    const getSelectedCount = () => {
        let count = 0;
        if (filters.type !== 'Tous') count++;
        count += filters.categories.length;
        return count;
    };

    return {
        filters,
        setFilters,
        handleTypeChange,
        handleCategoryToggle,
        resetFilters,
        getSelectedCount
    };
};