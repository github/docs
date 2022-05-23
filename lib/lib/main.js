"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
const tmp = __importStar(require("tmp"));
const check_1 = require("./check");
const input = __importStar(require("./input"));
const execa_1 = __importDefault(require("execa"));
/**
 * These environment variables are exposed for GitHub Actions.
 *
 * See https://bit.ly/2WlFUD7 for more information.
 */
const { GITHUB_TOKEN, GITHUB_WORKSPACE } = process.env;
function run(actionInput) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const startedAt = new Date().toISOString();
            const alertResp = yield execa_1.default('vale', actionInput.args);
            // (FORK) This is a hack to accommodate files modified before running Vale.
            // Note this only works if the file's line numbers are not changed by the modifying function.
            core.info('Original args:');
            actionInput.args.forEach(origArg => core.info(origArg));
            const modifiedArgs = actionInput.args.map(arg => arg.replace('.md', '.TEMP.md'));
            core.info('Modified args:');
            modifiedArgs.forEach(modArg => core.info(modArg));
            const modifiedAlertResp = yield execa_1.default('vale', modifiedArgs);
            core.info('Initial json report:');
            core.info(modifiedAlertResp.stdout);
            const alertResp = modifiedAlertResp.stdout.replace(/.TEMP.md/g, '.md');
            core.info('Updated json report:');
            core.info(alertResp);
            // (ENDFORK)
            let runner = new check_1.CheckRunner(actionInput.files);
            let sha = github.context.sha;
            if (github.context.payload.pull_request) {
                sha = github.context.payload.pull_request.head.sha;
            }
            // Allow to customize the SHA to use for the check
            // useful when using the action with a workflow_run/completed event
            if (process.env.OVERRIDE_GITHUB_SHA) {
                sha = process.env.OVERRIDE_GITHUB_SHA;
            }
            runner.makeAnnotations(alertResp.stdout);
            runner.makeAnnotations(alertResp);
            yield runner.executeCheck({
                token: actionInput.token,
                name: 'Vale',
                owner: github.context.repo.owner,
                repo: github.context.repo.repo,
                head_sha: sha,
                started_at: startedAt,
                context: { vale: actionInput.version }
            });
        }
        catch (error) {
            core.setFailed(error.stderr);
        }
    });
}
exports.run = run;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userToken = GITHUB_TOKEN;
            const workspace = GITHUB_WORKSPACE;
            const tmpobj = tmp.fileSync({ postfix: '.ini', dir: workspace });
            const actionInput = yield input.get(tmpobj, userToken, workspace);
            yield run(actionInput);
            tmpobj.removeCallback();
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
main();
