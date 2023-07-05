import { useContext, useEffect, useState } from 'react';
import { TextStyleContext } from '../../context/TextStyleContext';

const ConfigurationExporter = () => {
    const textStyle = useContext(TextStyleContext);
    const [config, setConfig] = useState({ textStyle });

    useEffect(() => {
        setConfig({ textStyle });
    }, [textStyle]);

    const handleExport = () => {
        const json = JSON.stringify(config);
        const blob = new Blob([json], { type: 'application/json' });
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = 'config.json';
        link.click();
        URL.revokeObjectURL(href);
    }

    return (
        <button onClick={handleExport}>Export configuration</button>
    );
}

export default ConfigurationExporter;
