# Azure Infrastructure as Code (IaC)

## Voraussetzungen

- Azure-Konto
- Azure CLI

## Dateien

- **azuredeploy.json**: Haupt-Template-Datei für Azure-Ressourcen.
- **azuredeploy.parameters.json**: Parameterdatei zur Anpassung des Templates.

## Schritte zur Bereitstellung

1. **Azure CLI anmelden**:

   ```bash
   az login
   ```

2. **Ressourcengruppe erstellen**:

   ```bash
   az group create --name <ResourceGroupName> --location <Location>
   ```

3. **Template bereitstellen**:
   ```bash
   az deployment group create --resource-group <ResourceGroupName> --template-file azuredeploy.json --parameters azuredeploy.parameters.json
   ```
