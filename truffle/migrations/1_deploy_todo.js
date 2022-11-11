const TodoApp = artifacts.require("Todo");

module.exports = (deployer) => {
    deployer.deploy(TodoApp);
};